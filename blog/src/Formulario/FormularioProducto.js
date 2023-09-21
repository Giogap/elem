import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function FormularioProducto () {
    const { id } = useParams();
    const [nombre_pro, setNombre_pro] = useState("");
    const [precio, setPrecio] = useState("");

    const [productosList, setProductos] = useState([]);

    const addProductos = () => {
        Axios.post(`http://localhost:3001/createProducto/${id}`, {
          nombre_pro: nombre_pro,
          precio: precio,
        })
          .then(() => {
            alert("Registro Ok");
            limpiarCampos();
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const limpiarCampos = () => {
        setProductos("");
    }

    return (
        <div>
            <h1>Productos</h1>
            <div className='container'>
                <div className="formulario">
                    <div className="datos">
                        <label>Producto: <input onChange={(event)=>{
                            setNombre_pro(event.target.value);
                        }} type="text" value={nombre_pro}></input></label>
                        <label>Precio: <input onChange={(event)=>{
                            setPrecio(event.target.value);
                        }} type="text" value={precio}></input></label>
                        <button onClick={addProductos}>Registrar</button>
                    </div>
                    <div className='lista'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nombre productos</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productosList.map((producto) => (
                                    <tr>
                                        <td> {producto.nombre_pro} </td>
                                        <td> {producto.precio} </td>                               
                                    </tr> 
                                ))}                                                                                 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    ) 


}

export default FormularioProducto;



        