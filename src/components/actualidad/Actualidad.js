import React from 'react';
import AdsComputadora from '../layout/AdsComputadora';
import Noticias from '../layout/Noticias';
import '../../main.css';

const Actualidad = () => {
    return (
        <div className="sub-inicio">
            <div className="sub-cuerpo">
                <Noticias tipo = "Actualidad"/>
            </div>
            <AdsComputadora />
        </div>
    );
}

export default Actualidad;