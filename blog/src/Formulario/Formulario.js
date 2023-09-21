import './Formulario.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


function Formulario() {

  const [nombre, setNombre] = useState("");
  const [biografia, setBiografia] = useState("");
  const [genero, setGenero] = useState("");
  const [pais, setPais] = useState("");
  const [id, setId] = useState("");

  const [editar, setEditar] = useState(false);

  const [bandasList, setBandas] = useState([]);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      biografia: biografia,
      genero: genero,
      pais: pais,
    }).then(() => {
      /*getBandas();*/
      alert("Registro Ok");
      limpiarCampos();
    });
  };

  const update = () => {
    Axios.put("http://localhost:3001/update", {
      nombre: nombre,
      biografia: biografia,
      genero: genero,
      pais: pais,
      id:id,
    }).then(() => {
      alert("Actualizado Ok")
      limpiarCampos();
    });
  };

  const deleteBanda = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      alert("Eliminado Ok")
    });
  };

  const limpiarCampos = () => {
    setNombre("");
    setBiografia("");
    setGenero("");
    setPais("");
    setEditar(false);
  }

  const editarBanda = (val) => {
    setEditar(true);

    setNombre(val.nombre);
    setBiografia(val.biografia);
    setGenero(val.genero);
    setPais(val.pais);
    setId(val.id);
  }

  const getBandas = () => {
    Axios.get("http://localhost:3001/bandas").then((response) => {
      setBandas(response.data);
    });
  };

  useEffect(() => {getBandas()}, []);
  
  return (
    <div className='container'>
      <div className="formulario">
        <div className="datos">
          <label>Nombre: <input onChange={(event)=>{
            setNombre(event.target.value);
          }} type="text" value={nombre}></input></label>
          <label>Biografia: <input onChange={(event)=>{
            setBiografia(event.target.value);
          }} type="text" value={biografia}></input></label>
          <label>Genero: <input onChange={(event)=>{
            setGenero(event.target.value);
          }} type="text" value={genero}></input></label>
          <label>Pais: <input onChange={(event)=>{
            setPais(event.target.value);
          }} type="text" value={pais}></input></label>
          {
            editar?
            <div>
              <button onClick={update}>Actualizar</button>
              <button onClick={limpiarCampos}>Cancelar</button>
            </div>
            :<button onClick={add}>Registrar</button>
          }
        </div>
        <div className='lista'>
          <button onClick={getBandas}>Mostrar</button>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Biografía</th>
                <th>Género</th>
                <th>País</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {bandasList.map((banda) => (
                <tr key={banda.id}>
                  <td><Link to={`/Formulariolink/${banda.id}`}>{banda.nombre}</Link></td>
                  <td>{banda.biografia}</td>
                  <td>{banda.genero}</td>
                  <td>{banda.pais}</td>
                  <td>
                    <button onClick={() => {
                      editarBanda(banda);   
                    }}>Editar</button>
                    <button onClick={() => {
                      deleteBanda(banda.id)
                    }}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>     
    </div>
  );
}

export default Formulario;