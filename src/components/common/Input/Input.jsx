import React from "react";
import './Input.css';

const InputBox = ({type, placeholder}) => (
    <input type={type} placeholder={placeholder} />
);

export default InputBox