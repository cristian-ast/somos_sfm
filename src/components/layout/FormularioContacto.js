import React from 'react';
import './FormularioContacto.css';

const FormularioContacto = () => {
    return (
        <div className="Contenedor-Formulario-Contacto">
            <form className="contenedor-form" method="POST" name="contact" netlify>
                
                <p><label>Nombre: <input className="form-text" type="text" name="name" /></label></p>    
                
                <p><label>Correo: <input className="form-text" type="email" name="email" /></label></p>  

                <p><label>Mensaje: <br/>  <textarea className="form-area" name="message" cols="38" rows="7"></textarea></label></p>
               
                <p><button className="form-button" type="submit">Enviar</button></p>
            </form>
        </div>
    );
}

export default FormularioContacto;