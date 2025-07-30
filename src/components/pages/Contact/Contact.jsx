import React from "react";
import './Contact.css'
import InputBox from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Textarea from "../../common/Textarea/Textarea";

const Contact = () => (
    <section className="contact-container">
        <h2 className="heading">Estemos en <span>Contacto</span></h2>

        <form action="#">
            <div className="contact-input-container">
                <InputBox 
                    type="text"
                    placeholder="Nombre completo"
                />
                <InputBox 
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div className="contact-input-container">
                <InputBox 
                    type="number"
                    placeholder="Télefono"
                />
                <InputBox 
                    type="text"
                    placeholder="Asunto del correo"
                />
            </div>
            <Textarea name="" id="" cols="30" rows="10" placeholder="Escribe aqui..." />
            <hr/>
            <Button
                text="Enviar"
            />
        </form>
    </section>
);

export default Contact