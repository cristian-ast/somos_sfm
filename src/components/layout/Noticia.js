import React from 'react';
import './Noticia.css';
import { withRouter } from 'react-router-dom';

const Noticia = ({history, titulo, img, url}) => {

    const Redirecionar = (url) => {
      history.push(url);
    }

    return (
        <div 
            style={{ backgroundImage: `url(${img})`}}
            className="noticia--indivudual" 
            onClick={() => Redirecionar(url)}
        >
            <div className="titulo--noticia">
                <p>{titulo}</p>
            </div>
        </div>
    );
}


export default withRouter(Noticia);