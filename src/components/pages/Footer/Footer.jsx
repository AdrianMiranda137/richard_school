import React from "react";
import './Footer.css'
import { NavLink } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

const Footer = ({ onNavigate }) => (
    <footer className="footer-container">
        <div className="footer-text">
            <p>Copyright &copy; 2025 by Richard Casolis | All Rights Reserved.</p>
        </div>

        <div className="footer-icon-top">
            <a
                className="footer-link"
                onClick={() => onNavigate(1)}
            >
                <i><FaArrowUp/></i>
            </a>
        </div>
    </footer>
);

export default Footer