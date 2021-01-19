import React from 'react';
import AdsComputadora from '../layout/AdsComputadora';
import Noticias from '../layout/Noticias';
import '../../main.css';

const Deportes = () => {
    return (
        <div className="sub-inicio">
            <div className="sub-cuerpo">
                <Noticias tipo = "Deportes"/>
            </div>
            <AdsComputadora />
        </div>
    );
}

export default Deportes;