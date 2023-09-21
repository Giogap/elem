import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import "./Biografia.css";


function Biografia() {
  const { id } = useParams();
  const [banda, setBanda] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:3001/bandas/${id}`).then((response) => {
      setBanda(response.data);
    });
  }, [id]);

  return (
    <div>
        <ul className="nav-links">
          <li>
            <Link to={`/Biografia/${id}`}>Biografía</Link>
          </li>
          <li>
            <Link to={`/Multimedia/${id}`}>Multimedia</Link>
          </li>
          <li>
            <Link to={`/Productos/${id}`}>Productos</Link>
          </li>
        </ul>
      
      <h2>{banda.nombre}</h2>
      <p>{banda.biografia}</p>
    </div>
  );
}

export default Biografia;
