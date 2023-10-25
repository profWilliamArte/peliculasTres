
import {  Link } from "react-router-dom";
const Header = () => {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg bg-menu py-3" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="logo.svg" width={250} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
           <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/Inicio" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                </li>

                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cine
                </a>
                <ul className="dropdown-menu">
                    <li><Link to="/Peliculas/CineRecientes" className="dropdown-item" href="#">Recientes</Link></li>
                    <li><Link to="/Peliculas/CineTendencias" className="dropdown-item" href="#">Tendencias</Link></li>
                    <li><Link to="/Peliculas/CineProximamente" className="dropdown-item" href="#">Próximamente</Link></li>
                    <li><Link to="/Peliculas/CineMejorValoradas" className="dropdown-item" href="#">Mejor Valodas</Link></li>
                </ul>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    TV
                </a>
                <ul className="dropdown-menu">
                    <li><Link to="/Peliculas/SeEmitenHoy" className="dropdown-item" href="#">Se Emiten Hoy</Link></li>
                    <li><Link to="/Peliculas/TvTendencias" className="dropdown-item" href="#">Tendencias</Link></li>
                    <li><Link to="/Peliculas/TvFavoritas" className="dropdown-item" href="#">Favoritas</Link></li>
                    <li><Link to="/Peliculas/TvMejorValoradas" className="dropdown-item" href="#">Mejor Valodas</Link></li>
                </ul>
                </li>
                <li className="nav-item">
                    <Link to="/Contactos" className="nav-link " aria-disabled="true">Contactos</Link>
                </li> 
            </ul>
            </div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
    </>
  )
}

export default Header