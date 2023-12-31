import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";

function FormularioLink () {
  const { id } = useParams();
  const [enlace, setEnlace] = useState("");

  const [enlacesList, setEnlaces] = useState([]);

  const [bandsList, setBands] = useState([]);

  const [bandSeleccionada, setBandSeleccionada] = useState(null);

  const addLink = () => {
    Axios.post(`http://localhost:3001/createLink/${id}`, {
      enlace: enlace,
    })
      .then(() => {
        alert("Registro Ok");
        limpiarCampos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getEnlaces = () => {
    Axios.get(`http://localhost:3001/Formulariolink/${id}`).then((response) => {
      setEnlaces(response.data);
    });
  };

  useEffect(() => {getEnlaces()}, []);


  const limpiarCampos = () => {
    setEnlace("");
  }  

  const getBands = () => {
    Axios.get("http://localhost:3001/bands").then((response) => {
      setBands(response.data);
      const band = response.data.find((band) => band.id === parseInt(id));
      setBandSeleccionada(band);
    });
  };

  useEffect(() => {getBands()}, []);

  return (
    <div>
        <div>
            <h1>Link</h1>
            <div className='container'>
                <div className="formulario">
                    <div className="datos">
                        <label>Link: <input onChange={(event)=>{
                            setEnlace(event.target.value);
                        }} type="text" value={enlace}></input></label>
                        <button onClick={addLink}>Registrar</button>
                    </div>
                    <div className='lista'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Link</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enlacesList.map((enlaces) => (
                                <tr>
                                    <td> {enlaces.enlace} </td>
                                    <td>
                                        <button onClick="">Editar</button>
                                        <button onClick="">Eliminar</button>
                                    </td>                                
                                </tr> 
                                ))}                                                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>      
        </div>
        {bandSeleccionada && (
          <Link to={`/FormularioProducto/${bandSeleccionada.id}`}>
            <button className="ingresarproducto">Ingresar Producto</button>
          </Link>
        )}           
    </div>
  );
}

export default FormularioLink;