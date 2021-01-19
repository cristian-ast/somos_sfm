import React from 'react';
import AdsComputadora from '../layout/AdsComputadora';
import Noticias from '../layout/Noticias';
import '../../main.css';

const Farandula = () => {
    return (
        <div className="sub-inicio">
            <div className="sub-cuerpo">
                <Noticias tipo = "Farándula"/>
            </div>
            <AdsComputadora />
        </div>
    );
}

export default Farandula;