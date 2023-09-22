import './Formulario.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


function Formulario() {

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [biografia, setBiografia] = useState("");  
  const [pais, setPais] = useState("");
  const [id, setId] = useState("");

  const [edit, setEdit] = useState(false);

  const [bandsList, setBands] = useState([]);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      country: country,
      genre: genre,
      biografia: biografia,      
      pais: pais,
    }).then(() => {
      /*getBandas();*/
      alert("Registro Ok");
      limpiarCampos();
    });
  };

  const update = () => {
    Axios.put("http://localhost:3001/update", {
      name: name,
      country: country,
      genre: genre,
      biografia: biografia,      
      pais: pais,
      id:id,
    }).then(() => {
      alert("Actualizado Ok")
      limpiarCampos();
    });
  };

  const deleteBand = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      alert("Eliminado Ok")
    });
  };

  const limpiarCampos = () => {
    setName("");
    setCountry("");
    setGenre("");
    setPais("");
    setEdit(false);
  }

  const editBand = (val) => {
    setEdit(true);

    setName(val.name);
    setCountry(val.country);
    setGenre(val.genre);
    setBiografia(val.biografia);    
    setPais(val.pais);
    setId(val.id);
  }

  const getBands = () => {
    Axios.get("http://localhost:3001/bandas").then((response) => {
      setBands(response.data);
    });
  };

  useEffect(() => {getBands()}, []);
  
  return (
    <div className='container'>
      <div className="formulario">
        <div className="datos">
          <label>Nombre: <input onChange={(event)=>{
            setName(event.target.value);
          }} type="text" value={name}></input></label>
          <label>Pais: <input onChange={(event)=>{
            setCountry(event.target.value);
          }} type="text" value={country}></input></label>
          <label>Genero: <input onChange={(event)=>{
            setGenre(event.target.value);
          }} type="text" value={genre}></input></label>
          <label>Biografia: <input onChange={(event)=>{
            setBiografia(event.target.value);
          }} type="text" value={biografia}></input></label>
          
          <label>Pais: <input onChange={(event)=>{
            setPais(event.target.value);
          }} type="text" value={pais}></input></label>
          {
            edit?
            <div>
              <button onClick={update}>Actualizar</button>
              <button onClick={limpiarCampos}>Cancelar</button>
            </div>
            :<button onClick={add}>Registrar</button>
          }
        </div>
        <div className='lista'>
          <button onClick={getBands}>Mostrar</button>
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
              {bandsList.map((band) => (
                <tr key={band.id}>
                  <td><Link to={`/Formulariolink/${band.id}`}>{band.name}</Link></td>
                  <td>{band.genre}</td>
                  <td>{band.biografia}</td>                  
                  <td>{band.pais}</td>
                  <td>
                    <button onClick={() => {
                      editBand(band);   
                    }}>Editar</button>
                    <button onClick={() => {
                      deleteBand(band.id)
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