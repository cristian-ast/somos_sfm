import React from 'react';
import AdsComputadora from '../layout/AdsComputadora';
import Noticias from '../layout/Noticias';
import '../../main.css';

const Politica = () => {
    return (
        <div className="sub-inicio">
            <div className="sub-cuerpo">
                <Noticias tipo = "Justicia"/>
            </div>
            <AdsComputadora />
        </div>
    );
}

export default Politica;