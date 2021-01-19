import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { BaseDatosContext } from '../../context/BaseDatosContext';

import Inicio from '../../components/inicio/Inicio';
import Actualidad from '../../components/actualidad/Actualidad';
import Deportes from '../../components/deportes/Deportes';
import Justicia from '../politica/Politica';
import Farandula from '../../components/farandula/Farandula';
import Economia from '../../components/economia/Economia';
import SobreNosotros from '../../components/sobreNosotros/SobreNosotros';
import Contacto from '../../components/contacto/Contacto';
import PoliticasDeUso from '../../components/politicasDeUso/PoliticasDeUso';
import Iniciarseccion from '../../components/auth/IniciarSeccion';
import PanelDeControl from '../../components/auth/PanelDeControl';
import PageNoticia from '../../components/pageNoticia/PageNoticia';
import GaleriaDeImagenes from '../../components/GaleriaDeImagenes/GaleriaDeImagenes';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../../temaConfing';
import Navbar from '../../components/Navbar';
import facebook from '../../img/facebook.png';
import gmail from '../../img/gmail.png';
import whatsapp from '../../img/whatsapp.png';

import '../../main.css';
const AppHeme = () => {

    const { baseDatos } = useContext(BaseDatosContext);

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar/>
                    <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/Actualidad" component={Actualidad} />
                    <Route exact path="/Deportes" component={Deportes} />
                    <Route exact path="/Justicia" component={Justicia} />
                    <Route exact path="/Farandula" component={Farandula} />
                    <Route exact path="/Economia" component={Economia} />
                    <Route exact path="/Sobre-Nosotros" component={SobreNosotros} />
                    <Route exact path="/Contacto" component={Contacto} />
                    <Route exact path="/Politicas-De-Uso" component={PoliticasDeUso} />
                    <Route exact path="/Iniciar-Seccion" component={Iniciarseccion} />
                    <Route exact path="/Panel-De-Control" component={PanelDeControl} />
                    <Route exact path="/Galeria-De-Imagenes" component={GaleriaDeImagenes} />
                    {
                        baseDatos.noticias.map((noticia) => (
                            <Route key={noticia} exact path={noticia.url} component={PageNoticia} />
                        ))
                    }
                </Switch>
                <footer className="footer">
                    <div className="contenidoFooter">
                        <div className="redes">
                            <a href="https://facebook.com/victorteinformasfm" target="_blank" rel="noreferrer">
                                <img src={facebook} alt="Facebook" />Facebook
                            </a>
                        </div>
                        <div className="redes">
                            <a href="mailto:victormanueldiazrosado@gmail.com" target="_blank" rel="noreferrer">
                                <img src={gmail} alt="Gmail" /> Gmail
                            </a>
                        </div>
                        <div className="redes">
                            <a href="https://api.whatsapp.com/send?phone=18093158252&text=Buenas" target="_blank" rel="noreferrer">
                                <img src={whatsapp} alt="Whatsapp" /> +1809-315-8252
                            </a>
                        </div>
                    </div>
                </footer>
                <footer className="footer2">
                    <div className="contenidoFooter2">
                    <div className="despc">
                        San Francisco de Macorís, Duarte, Rep. Dom.
                    </div>
                    <div className="despc">
                        Victor Manuel
                    </div>
                    </div>
                </footer>
            </ThemeProvider>  
        </Router> 
    );
}

export default AppHeme;