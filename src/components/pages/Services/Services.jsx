import React from "react";
import { FaBook } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa6";
import CardOne from "../../common/CardOne/CardOne";
import './Services.css'

const servicesOptions = [
    {
        icon: <FaBook />,
        title: 'Aprendizaje del idioma',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo dignissimos amet expedita accusamus saepe cumque ex est unde impedit ipsa, fugit, illum tempore, quia voluptate. Quasi obcaecati earum ipsa est.'
    },
    {
        icon: <FaSchoolFlag />,
        title: 'Regularización',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem consequatur doloribus fuga dolor unde at rem velit, ex hic quibusdam provident voluptatem corrupti nesciunt, sit doloremque quia! Sunt, fugit explicabo!'
    },
    {
        icon: <FaLanguage />,
        title: 'Traducción',
        description: 'Lorem ipsum dolor, sit amet. Tempore, deserunt nam. Ex veritatis dicta a culpa blanditiis pariatur doloribus dolor totam asperiores, soluta accusamus, dolores, aut perspiciatis ipsum similique temporibus!'
    },
]

const Services = () => (
    <section className="services-container">
        <h2 className="heading">Mis <span>Servicios</span></h2>

        <div className="services-options">
            {servicesOptions.map(({icon, title, description}) => (
                <CardOne
                    key={title}
                    icon={icon}
                    title={title}
                    description={description}
                />
            ))}
        </div>
    </section>
);

export default Services