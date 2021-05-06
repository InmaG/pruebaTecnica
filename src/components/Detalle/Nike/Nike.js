import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import jordan from '../../../assets/airjordan.jpg';
import logonike from '../../../assets/logonike.jpg';
import vintage from '../../../assets/vintage.jpg';
import vaporffly from '../../../assets/vaporffly.jpg';
import './Nike.css';
import { Link } from 'react-router-dom';


function Nike(){
          
      return(
        <div className="main-detalle">
            <div className="text-detalle">
                <h1>Detalle Nike</h1>
            </div>
            <botton className="boton-volver" >
            <Link to="/">Volver</Link>
            </botton>

        <div className="detalle-fabricante">
            <div className="imagen-logonike">
                    <img src={logonike} alt="LogoNike" id="imagen-nike"></img>
                </div>
                <div className="fabricante"><p className="fabricante">Nombre Fabricante</p> <h4>Nike</h4></div>
                <div className="fabricante"> <p className="fabricante">CIF</p> <h4>J92309657 </h4></div>
                <div className="fabricante"><p className="fabricante">Dirección</p> <h4>Av.Ramon y Cajal 3,Marbella</h4></div>
                 
            </div>
            <div className="detalle-articulo">
                <div className="imagen-jordan">
                    <img src={jordan} alt="AirJordan1" id="imagen-jordan"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>Air Jordan 1 Mid</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>10</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>120</h4></div>
                 
             
             </div>
             <div className="detalle-articulo2">
                <div className="imagen-jordan">
                    <img src={vintage} alt="AirJordan1" id="imagen-jordan"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>Nike Blazer Mid 77 Vintage</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>8</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>99</h4></div>
                 
             
             </div>
             <div className="detalle-articulo3">
                <div className="imagen-jordan">
                    <img src={vaporffly} alt="AirJordan1" id="imagen-jordan"></img>
                </div>
                <div className="articulo"> <p className="articulo">Nombre Artículo</p> <h4>Nike ZoomX Vaporfly</h4></div>
                <div className="articulo"> <p className="articulo">Relevancia</p> <h4>10</h4></div>
                <div className="articulo"> <p className="articulo">Precio</p> <h4>250</h4></div>
                 
             
             </div>
             

            
        </div>

       


    )
    }


export default Nike;