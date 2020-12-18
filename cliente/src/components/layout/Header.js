import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(

        <nav className="app-header">
        
            {/* <p className="nombre-usuario">Hola <span>Joan</span></p> */}
            <Link to={'/'}>
                    <img src="img/logo4.png" class="header-logo nav-principal" alt="logo"/>
            </Link>
            <div className="nav-principal">
                <Link to={'/biografia'}>Biografía</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/integrantes'}>Integrantes</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/discografia'}>discografia</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/fotos'}>Fotos</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/videos'}>Videos</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/covers'}>Covers</Link>
            </div>

        </nav>
    );
}

export default Header;