import * as React from 'react';
import Nike from '../Detalle/Nike/Nike';
import { DataGrid } from '@material-ui/data-grid';
import jordan from '../../assets/airjordan.jpg';
import logonike from '../../assets/logonike.jpg';
import vintage from '../../assets/vintage.jpg';
import vaporffly from '../../assets/vaporffly;
import './Detalle.css';
import Adidas from '../Detalle/Adidas/Adidas'
import Salomon from '../Detalle/Salomon/Salomon'

function Detalle(){

    return(
        <div className="main-detalle">

            {/* <Nike /> */}
            <Adidas />
                    
        </div>

       


    )
}


export default Detalle;