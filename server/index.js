const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "escarraman_db"

});

app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const biografia = req.body.biografia;
    const genero = req.body.genero;
    const pais = req.body.pais;
    

    db.query('INSERT INTO bandas(nombre, biografia, genero, pais) VALUES (?, ?, ?, ?)', [nombre, biografia, genero, pais], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Registro Ok");
        }
    });
});

app.post("/createLink/:id", (req, res) => {
    const enlace = req.body.enlace;
    const banda_id = req.params.id;
    
    db.query('INSERT INTO multimedia(banda_id, enlace) VALUES (?, ?)', [banda_id, enlace], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Registro Ok");
        } 
    });    
});


app.get("/bandas", (req, res) => {
    db.query('SELECT * FROM bandas', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get("/bandas/:id", (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM bandas WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).send("Banda no encontrada");
            }
        }
    });
});

app.get("/Formulariolink/:id", (req, res) => {
    const banda_id = req.params.id;
  
    db.query('SELECT * FROM multimedia WHERE banda_id = ?', banda_id, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error en el servidor");
      } else {
        res.send(result);
      }
    });
  });



app.put("/update", (req, res) => {
    const nombre = req.body.nombre;
    const biografia = req.body.biografia;
    const genero = req.body.genero;
    const pais = req.body.pais;
    const id = req.body.id;
    

    db.query('UPDATE bandas SET nombre = ?, biografia = ?, genero = ?, pais = ? WHERE id = ?', [nombre, biografia, genero, pais, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Actualizado Ok");
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    

    db.query('DELETE FROM bandas WHERE id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Server Ok 3001");
});