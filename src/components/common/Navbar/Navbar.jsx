import React, { useState, useEffect } from "react";
import './Navbar.css'
import { NavLink, useLocation } from "react-router-dom";
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
        to: '/richard_school/about',
        icon: ''
    },
    {
        text: 'Servicios',
        to: '/richard_school/services',
        icon: ''
    },
    {
        text: 'Experiencia',
        to: '/richard_school/experience',
        icon: ''
    },
    {
        text: 'Contacto',
        to: '/richard_school/contact',
        icon: ''
    },
]

const Navbar = ({onNavigate}) => {
    const [showMenu, setShowMenu] = useState(true);

    const handleShowMenu = (i) => {
        if (window.innerWidth < 768) {
            setShowMenu(!showMenu)
        }

        if(i){
            onNavigate(i);
        }
    }

    useEffect(() => {
        if (window.innerWidth < 768) {
            setShowMenu(false)
        }
    }, []);

    return(
        <div className="navbar-container">
            <a className="navbar-logo">
                Richard School
            </a>

            <i
                id="menu-icon"
                onClick={() => handleShowMenu(null)}
            >
                {showMenu ? <FaTimes /> : <FaBars/>}
            </i>
            {showMenu &&
                <nav className="navbar-options">
                    {navBarOptions.map(({text, to, icon}, index) => (
                        <a 
                            className="navbar-link" 
                            onClick={() => handleShowMenu(index)}
                            key={to}>
                            {text}
                        </a>
                    ))}
                </nav>
            }
        </div>
    );
}

export default Navbar