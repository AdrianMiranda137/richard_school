import React from "react";
import Button from "../Button/Button";
import './CardOne.css'

const CardOne = ({icon, title, description}) => (
    <div className="card-box">
        <i className="card-icon">{icon}</i>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button
            text="Ver más"
        />
    </div>
)

export default CardOne