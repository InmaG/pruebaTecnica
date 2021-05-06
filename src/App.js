import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import MaterialTable from 'material-table';
import TextField from "@material-ui/core/TextField";
import Main from './components/Main/Main'
import Nike from './components/Detalle/Nike/Nike';
import Adidas from './components/Detalle/Adidas/Adidas'
import Detalle from './components/Detalle/Nike/Nike'
import Salomon from './components/Detalle/Salomon/Salomon'
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";

// import { useForm } from "react-hook-form";

function App() {
  return (
    <div className="App">
     {/* <Main /> */}
     {/* <Detalle /> */}
     <Router>
           
    <Switch>

        <Route exact path="/" component={Main} />
        <Route path="/nike" component={Nike} />
        <Route path="/adidas" component={Adidas} />
        <Route path="/salomon" component={Salomon} />
               
       
    </Switch>
</Router>

     
    </div>
  );
}

export default App;

