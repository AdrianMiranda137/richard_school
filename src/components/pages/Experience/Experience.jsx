import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import CardTwo from "../../common/CardTwo/CardTwo";
import './Experience.css'

const experienceOptions = [
    {
        img: '/richard_school/experience1.jpg',
        title: 'Escuela',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    },
    {
        img: '/richard_school/experience2.jpg',
        title: 'Empresa',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    },
    {
        img: '/richard_school/experience3.jpg',
        title: 'Clases personales',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    }
]

const Experience = () => (
    <section className="experience-container">
        <h2 className="heading">Experiencia <span>reciente</span></h2>

        <div className="experience-options">
            {
                experienceOptions.map(({img, title, description, icon}) => (
                    <CardTwo 
                        key={title}
                        img={img}
                        title={title}
                        description={description}
                        icon={icon}
                    />
                ))
            }
        </div>
    </section>
);

export default Experience