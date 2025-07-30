import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import './Home.css'
import Button from "../../common/Button/Button";

const Home = () => (
    <section className="home-container">
        <div className="home-content">
            <h3>Hello, It's Me</h3>
            <h1>Richard</h1>
            <h3>And I'm a <span>English Teacher</span></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut beatae quis praesentium, libero aspernatur excepturi. Mollitia incidunt a, necessitatibus nesciunt quisquam accusantium eveniet, maiores sequi et, obcaecati cupiditate fugit maxime.</p>

            <div className="home-social-media">
                <a href="">
                    <FaFacebookF />
                </a>
                <a href="">
                    <FaLinkedinIn />
                </a>
                <a href="">
                    <FaInstagram />
                </a>
            </div>
            <Button 
                text="Download CV"
            />
        </div>

        <div className="home-img">
            <img src={'./richard_school/richard.png'} alt="Richard"/>
        </div>
    </section>
);

export default Home