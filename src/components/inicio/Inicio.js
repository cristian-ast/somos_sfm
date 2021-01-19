import React from 'react';
import AdsComputadora from '../layout/AdsComputadora';
import Noticias from '../layout/Noticias';

import logo from './img/portada.jpg';
import './Inicio.css';

const Inicio = () => {

    return (
      <div className="inicio">
        <div className="cuerpo">
          <div className="portada">
            <br/>
            <br/>
            <div className="contenido">
              <img src={logo} className="imglogo" alt="logo"/>
            </div>
            <div className="contenerdorTextos">
              <div className="textos">
                <h2>Bienvenido al mejor lugar para las noticias</h2>
              </div>
            </div>
          </div>
          <div>
            <Noticias tipo = "Inicio"/>
          </div>
        </div>
        <AdsComputadora />
      </div>
    );
}

export default Inicio;