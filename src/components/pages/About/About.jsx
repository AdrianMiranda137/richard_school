import React from "react";
import Button from "../../common/Button/Button";
import './About.css'

const AboutMe = () => (
    <section className="about-container">
        <div className="about-img">
            <img src="./richard_school/richard2.png" alt="" />
        </div>

        <div className="about-content">
            <h2 className="heading">Acerca de <span>Mi</span></h2>
            <h3>Profesor de Inglés</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos impedit quos quisquam facilis repellat culpa facere voluptatum eius harum omnis itaque, officiis minus. Aliquam dolores ea dicta ipsam ipsum.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quas hic modi, sequi iusto fugit quis minima maxime ducimus dolore nesciunt cumque nisi qui aliquam nihil dicta, voluptatum eos. Quia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero repellat aut saepe, quasi doloribus ducimus, dolore nihil optio dolorum quia laudantium architecto ullam nam quibusdam. Similique aspernatur iusto laboriosam?
            </p>
            <Button
                text="Read More"
            />
        </div>
    </section>
);

export default AboutMe