import { useEffect, useState } from "react"
import Card from "./Card";
import Paginar from "./Paginar";
const APIRecienteCine='https://api.themoviedb.org/3/movie/now_playing?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';
const APITendenciCine='https://api.themoviedb.org/3/trending/movie/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';//tendencias
const APIProximamCine='https://api.themoviedb.org/3/movie/upcoming?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';    //proximamente 
const APIMejorValCine='https://api.themoviedb.org/3/movie/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE';                         
const APISeEmitenHoy='https://api.themoviedb.org/3/tv/airing_today?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&sort_by=popularity.desc';    //proximamente 
const APIFavoritasTv='https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VES&page=1&sort_by=popularity.desc';                      
const APITendenciTv='https://api.themoviedb.org/3/trending/tv/day?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&sort_by=popularity.desc';
const APIMejorValTv='https://api.themoviedb.org/3/tv/top_rated?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE'; 
const APIBuscar ='https://api.themoviedb.org/3/search/multi?api_key=ecbcdcf9044928d12b179d9153f5a269&language=es-VE&page=1&include_adult=false&query='

const MainPeliculas = ({id}) => {
  const opciones = {
    CineRecientes: {
      API: APIRecienteCine,
      titulo: "Peliculas Recientes",
    },
    CineTendencias: {
      API: APITendenciCine,
      titulo: "Peliculas que son Tendencias",
    },
    CineProximamente: {
      API: APIProximamCine,
      titulo: "Películas que se estrenarán próximamente",
    },
    CineMejorValoradas: {
      API: APIMejorValCine,
      titulo: "Películas mejor valoradas",
    },
    SeEmitenHoy: {
      API: APISeEmitenHoy,
      titulo: "Programas de Tv que se emiten Hoy",
    },
    TvTendencias: {
      API: APITendenciTv,
      titulo: "Programas de Tv en tendencia",
    },
    TvFavoritas: {
      API: APIFavoritasTv,
      titulo: "Programas favoritos en Tv",
    },
    TvMejorValoradas: {
      API: APIMejorValTv,
      titulo: "Programas o Peliculas mejor valoradas en TV",
    },


  };

  const [peliculas, setPeliculas] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgFondo, setImgFondo]=useState("");

  const getPeliculas = async (page) => {
    try {
      let URL=opciones[id].API + "&page=" + page;// url resultante del api
      let NA=Math.floor(Math.random() * (19 - 0 + 1) + 0)// numero aleatoria del 0 al 19
     
      const response = await fetch(URL);
      const data = await response.json();
        setPeliculas(data.results);
        setImgFondo(data.results[NA].backdrop_path);
        setTotalPages(data.total_pages);
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    }
  };

  useEffect(() => {
    getPeliculas(currentPage);
  }, [opciones[id].API, currentPage]);

  useEffect(() => {
    setCurrentPage(1); // Reset currentPage to 1 when opciones[id].API changes
  }, [opciones[id].API]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      getPeliculas(page); // Pasar 'page' en lugar de 'currentPage'
    }
  };

  if (loading) {
    return <h1 className="text-center py-5">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-center py-5">Error: {error.message}</h1>;
  }

  return (
    <header style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${imgFondo})` }}>
        <div className="container">
          <h1 className="titulo">{opciones[id].titulo}</h1>
          <Paginar
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
          />
          <div className="row">
            {peliculas && peliculas.map((pelicula) => (
              <Card pelicula={pelicula} key={pelicula.id}/>
            ))}
          </div>
        </div>
    </header>
  
  )
}

export default MainPeliculas