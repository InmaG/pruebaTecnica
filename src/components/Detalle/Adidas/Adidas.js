import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import gazela from '../../../assets/gazela.jpg';
import logoadidas from '../../../assets/logoadidas.jpg';
import ultraboost from '../../../assets/ultraboost.jpg';
import superstar from '../../../assets/superstar.jpg';
import './Adidas.css';
import { Link } from 'react-router-dom';

function Adidas(){

    return(
        <div className="main-detalle">
            <div className="text-detalle">
                <h1>Detalle Adidas</h1>
            </div>
            <botton className="boton-volver" >
            <Link to="/">Volver</Link>
            </botton>

        <div className="detalle-fabricante">
            <div className="imagen-logonike">
                    <img src={logoadidas} alt="LogoAdidas" id="imagen-adidas"></img>
                </div>
                <div className="fabricante"><p className="fabricante">Nombre Fabricante</p> <h4>Adidas</h4></div>
                <div className="fabricante"> <p className="fabricante">CIF</p> <h4>A28788909</h4></div>
                <div className="fabricante"><p className="fabricante">Dirección</p> <h4>Maria Zambrano,31 4 Zaragoza.</h4></div>
                 
            </div>
            <div className="detalle-articulo">
                <div className="imagen-gazela">
                    <img src={gazela} alt="Gazela" id="imagen-gacela"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>Gazelle</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>5</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>60</h4></div>
                 
             
             </div>
             <div className="detalle-articulo2">
                <div className="imagen-gazela">
                    <img src={ultraboost} alt="Ultraboost" id="imagen-Ultraboost"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>Ultraboost 20</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>10</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>180</h4></div>
                 
             
             </div>
             <div className="detalle-articulo3">
                <div className="imagen-gazela">
                    <img src={superstar} alt="AirJordan1" id="imagen-superstar"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>Superstar</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>8</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>70</h4></div>
                 
             
             </div>
             

            
        </div>

       


    )
}


export default Adidas;