import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from './logo.svg';

import Home from "../Navbar/Home";
import Bandas from "../Bands/Bands";
import Pais from "../Country/Country";
import Navbar from "../Navbar/Navbar";
import Formulario from "../Formulario/Formulario";
import Biografia from "../Biografia/Biografia";
import Multimedia from "../Multimedia/Multimedia";
import Productos from "../Productos/Productos";
import FormularioLink from "../Formulario/Formulariolink";
import FormularioProducto from "../Formulario/FormularioProducto";

function App() {
  return (
    <Router>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </div>
      <div className='App-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bandas" element={<Bandas />} />
          <Route path="/pais" element={<Pais />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/biografia/:id" element={<Biografia />} />
          <Route path="/multimedia/:id" element={<Multimedia />} />
          <Route path="/productos/:id" element={<Productos />} />
          <Route path="/formulariolink/:id" element={<FormularioLink />} />
          <Route path="/formularioproducto/:id" element={<FormularioProducto />} />
        </Routes>
      </div>
      <div className='App-footer'>
        <p>El Escarraman Music 2023</p>
      </div>
    </Router>
  );
}

export default App;