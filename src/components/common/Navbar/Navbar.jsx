import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";

const navBarOptions = [
    {
        text: 'Inicio',
        to: '/',
        icon: ''
    },
    {
        text: 'Acerca de mi',
        to: '/about',
        icon: ''
    },
    {
        text: 'Servicios',
        to: '/services',
        icon: ''
    },
    {
        text: 'Testimonios',
        to: '/testimonials',
        icon: ''
    },
    {
        text: 'Contacto',
        to: '/contact',
        icon: ''
    },
]

const Navbar = () => {
    return(
        <div className="navbar-container">
            <NavLink className="navbar-logo" to='/'>
                Richard School
            </NavLink>
            <nav className="navbar-options">
                {navBarOptions.map(({text, to, icon}) => (
                    <NavLink 
                        className="navbar-link" 
                        activeclassname="active" 
                        to={to} 
                        key={to}>
                        {text}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default Navbar