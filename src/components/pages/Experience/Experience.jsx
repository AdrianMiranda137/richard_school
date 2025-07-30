import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import CardTwo from "../../common/CardTwo/CardTwo";
import './Experience.css'

const experienceOptions = [
    {
        img: '/richard_school/vite.svg',
        title: 'Escuela 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    },
    {
        img: '/richard_school/vite.svg',
        title: 'Escuela 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    },
    {
        img: '/richard_school/vite.svg',
        title: 'Escuela 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    },
    {
        img: '/richard_school/vite.svg',
        title: 'Alumno 1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    },
    {
        img: '/richard_school/vite.svg',
        title: 'Alumno 2',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    },
    {
        img: '/richard_school/vite.svg',
        title: 'Alumno 3',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quo earum nobis natus nisi voluptates! Est',
        icon: <FaArrowUpRightFromSquare />
    },
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