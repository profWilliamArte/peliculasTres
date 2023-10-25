import React from 'react';

const Card = ({pelicula}) => {
let titulo  = pelicula.title;
if(titulo==undefined)   titulo=pelicula.name;

return (
    <div className="col-md-4 col-lg-3 col-xl-2 mb-4 animaImagen "  >
        <div className="card text-center h-100 swing-in-left-bck" data-bs-theme="dark">
            <div className="card-header p-0">
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="" className="img-fluid" />
            </div>
            <div className="card-body"> 
                <h5>{titulo}</h5>
                <div className=" d-flex justify-content-evenly">
                    <p className=" text-white" >Average</p>
                    <p className=" text-white" >Popularidad</p> 
                </div>
                <div className=" d-flex justify-content-evenly">
                    <p><span className="badge text-bg-warning">{pelicula.vote_average}</span></p>
                    <p><span className="badge text-bg-warning">{pelicula.popularity}</span></p>
                </div>
            </div>
            <div className='card-footer'>
                Detalle
                <div className="card--hover slide-in-elliptic-top-fwd">
                    <h4 className="p-3" >{titulo}</h4>
                    <p className="p-2">
                    {pelicula.overview} 
                    </p>
                </div>
            </div>

        </div>
  </div>
  )
}

export default Card