import React from 'react';
import AdsComputadora from '../layout/AdsComputadora';
import '../../main.css';
import FormularioContacto from '../layout/FormularioContacto';

const Contacto = () => {
    return (
        <div className="sub-inicio">
            <div className="sub-cuerpo">
                <h3>Ponte en contacto con nosotros</h3>
                <FormularioContacto />
            </div>
            <AdsComputadora />
        </div>
    );
}

export default Contacto;