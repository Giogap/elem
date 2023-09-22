import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Bands() {
  const [bandsList, setBands] = useState([]);

  const getBands = () => {
    Axios.get("http://localhost:3001/bands").then((response) => {
      setBands(response.data);
    });
  };

  useEffect(() => {
    getBands();
  }, []);

  return (
    <>
      <h1>BANDAS</h1>
      <div className="bandas-container">
        <ul>
          {bandsList.map((band) => (
            <li key={band.id}>
              <Link to={`/Biografia/${band.id}`}>{band.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Bands;
