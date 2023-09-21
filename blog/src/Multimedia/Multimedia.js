import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";



function Multimedia() {
  const { id } = useParams();
  const [banda, setBanda] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:3001/bandas/${id}`).then((response) => {
      setBanda(response.data);
    });
  }, [id]);

  return (
    <div>
      <div className="container-navlinks">
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
      </div>
      <h1>Multimedia</h1>
    </div>
  );
}

export default Multimedia;