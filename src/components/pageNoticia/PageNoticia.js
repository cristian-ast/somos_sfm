import React, { useState, useContext, Fragment } from 'react';
import './PageNoticia.css';
import {Helmet} from "react-helmet";

import AdsComputadora from '../layout/AdsComputadora';
import AdsMovil from '../layout/AdsMovil';

import { BaseDatosContext } from '../../context/BaseDatosContext';

const PageNoticia = () => {

    var URLactual = window.location.pathname;

    const { baseDatos } = useContext(BaseDatosContext);

    const Noticia = baseDatos.noticias.find(({ url }) => url === URLactual);
    const [ datos ] = useState(Noticia);

    const multiploDe3 = (n) => {
        var resto = n % 3;

        if(resto === 0) return true;
        
        else return false;
    }

    let contador = 0;

    const MostarAnuncios = () => {
        contador++
        if (multiploDe3(contador)) {
            return (
                <AdsMovil />
            );
        } else {
            return null;
        }
    }

    return (
        <div className="inicio">
            <div className="cuerpo--noticias">
                <Helmet>
                    <title>{datos.titulo}</title>
                    <meta name="description" content="Página de noticias en la ciudad de San Francisco de Macorís, República Domnicana" />
                </Helmet>

                <div className="cuerpo--noticias--cabecera">
                    <img className="cuerpo--noticias--imagen" src={datos.imgBig} alt="imagen" />

                    <div className="cuerpo--noticias--titulo__fecha">
                        <h1 className="cuerpo--noticias--titulo">{datos.titulo}</h1>
                        <p className="cuerpo--noticias--fecha">{datos.tipo} {'>>'} {datos.fecha}</p>
                    </div>
                </div>
                
                <div className="cuerpo--noticias--desarrollo">
                    {datos.cuerpo.map((parrafo) => (
                        <Fragment>
                            <p key={parrafo} className="cuerpo--noticias--desarrollo--parrafo">{parrafo}</p>
                            {MostarAnuncios()}
                        </Fragment>
                    ))}
                </div>
            </div>
            <AdsComputadora />
        </div>
    );
}

export default PageNoticia;