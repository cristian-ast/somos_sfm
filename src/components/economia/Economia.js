import React from 'react';
import AdsComputadora from '../layout/AdsComputadora';
import Noticias from '../layout/Noticias';
import '../../main.css';

const Economia = () => {
    return (
        <div className="sub-inicio">
            <div className="sub-cuerpo">
                <Noticias tipo = "Economía"/>
            </div>
            <AdsComputadora />
        </div>
    );
}

export default Economia;