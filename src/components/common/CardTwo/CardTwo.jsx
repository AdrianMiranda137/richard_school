import React from "react";
import './CardTwo.css'
import Button from '../Button/Button'
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const CardTwo = ({title, description, img, icon}) => (
    <div className="card-two-box">
        <img src={img} alt="" />
        <div className="card-two-layer">
            <h4>{title}</h4>
            <p>{description}</p>
            <ButtonIcon 
                icon={icon}
            />
        </div>
    </div>
);

export default CardTwo