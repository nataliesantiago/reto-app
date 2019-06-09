import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link" activeClassName="active">Home</NavLink>  
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/crear-usuario'} className="nav-link" activeClassName="active">Crear usuario</NavLink>  
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/lista-usuarios'} className="nav-link" activeClassName="active">Listar usuarios</NavLink>  
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;