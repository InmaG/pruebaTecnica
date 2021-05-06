import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import gazela from '../../../assets/gazela.jpg';
import logosalomon from '../../../assets/logosalomon.jpg';
import speedCross from '../../../assets/speedCross.jpg';
import xultra from '../../../assets/Xultra.jpg';
import advanced from '../../../assets/advanced.jpg'
import { Link } from 'react-router-dom';

import './Salomon.css';

function Salomon(){

    return(
        <div className="main-detalle">
            <div className="text-detalle">
                <h1>Detalle Salomon</h1>
            </div>
            <botton className="boton-volver" >
                <Link to="/">Volver</Link>
            </botton>

        <div className="detalle-fabricante">
            <div className="imagen-logosalomon">
                    <img src={logosalomon} alt="LogoSalomon" id="imagen-salomon"></img>
                </div>
                <div className="fabricante"><p className="fabricante">Nombre Fabricante</p> <h4>Salomon</h4></div>
                <div className="fabricante"> <p className="fabricante">CIF</p> <h4>E86107695</h4></div>
                <div className="fabricante"><p className="fabricante">Dirección</p> <h4>Calle eloy Gonzalo, 11, Madrid</h4></div>
                 
            </div>
            <div className="detalle-articulo">
                <div className="imagen-speedCross">
                    <img src={speedCross} alt="speedCross" id="imagen-SpeedCross"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>SpeedCross 3 RACING</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>8</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>140</h4></div>
                 
             
             </div>
             <div className="detalle-articulo2">
                <div className="imagen-gazela">
                    <img src={xultra} alt="Ultraboost" id="imagen-Xultra"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>X Ultra 4 GORE-TEX</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>10</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>270</h4></div>
                 
             
             </div>
             <div className="detalle-articulo3">
                <div className="imagen-gazela">
                    <img src={advanced} alt="XT-4Advanced" id="imagen-advanced"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>XT-4 Advanced</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>10</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>185</h4></div>
                 
             
             </div>
             

            
        </div>

       


    )
}


export default Salomon;