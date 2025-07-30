import React, { useState } from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const navBarOptions = [
    {
        text: 'Inicio',
        to: '/richard_school',
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
        text: 'Experiencia',
        to: '/experience',
        icon: ''
    },
    {
        text: 'Contacto',
        to: '/contact',
        icon: ''
    },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return(
        <div className="navbar-container">
            <NavLink className="navbar-logo" to='/'>
                Richard School
            </NavLink>

            <i
                id="menu-icon"
                onClick={handleShowMenu}
            >
                {showMenu ? <FaTimes /> : <FaBars/>}
            </i>

            {showMenu && <nav className="navbar-options">
                {navBarOptions.map(({text, to, icon}) => (
                    <NavLink 
                        className="navbar-link" 
                        activeclassname="active" 
                        onClick={handleShowMenu}
                        to={to} 
                        key={to}>
                        {text}
                    </NavLink>
                ))}
            </nav>}
        </div>
    );
}

export default Navbar