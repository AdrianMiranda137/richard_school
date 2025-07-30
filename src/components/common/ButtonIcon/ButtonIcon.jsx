import React from "react";
import './ButtonIcon.css'

const ButtonIcon = ({icon, onClick}) => (
    <button className="button-icon" onClick={onClick}>
        <i>
            {icon}
        </i>
    </button>
);

export default ButtonIcon