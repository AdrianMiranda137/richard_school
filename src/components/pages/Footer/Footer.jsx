import React from "react";
import './Footer.css'
import { NavLink } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => (
    <footer className="footer-container">
        <div className="footer-text">
            <p>Copyright &copy; 2025 by Richard Casolis | All Rights Reserved.</p>
        </div>

        <div className="footer-icon-top">
            <NavLink
                className="footer-link"
                to='/richard_school'
            >
                <i><FaArrowUp/></i>
            </NavLink>
        </div>
    </footer>
);

export default Footer