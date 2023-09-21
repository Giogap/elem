import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Bandas() {
  const [bandasList, setBandas] = useState([]);

  const getBandas = () => {
    Axios.get("http://localhost:3001/bandas").then((response) => {
      setBandas(response.data);
    });
  };

  useEffect(() => {
    getBandas();
  }, []);

  return (
    <>
      <h1>BANDAS</h1>
      <div className="bandas-container">
        <ul>
          {bandasList.map((banda) => (
            <li key={banda.id}>
              <Link to={`/Biografia/${banda.id}`}>{banda.nombre}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Bandas;
