import React from "react";
import './Textarea.css'

const Textarea = ({name, id, cols, rows, placeholder}) => (
    <textarea name={name} id={id} cols={cols} rows={rows} placeholder={placeholder} />
);

export default Textarea