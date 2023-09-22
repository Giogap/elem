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
    database: "p_escarra_db"

});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const country = req.body.country;
    const genre = req.body.genre;
    const biography = req.body.biography;    
    const pais = req.body.pais;
    

    db.query('INSERT INTO bandas(name, country, genre, biography, phone) VALUES (?, ?, ?, ?, ?)', [name, country, genre, biography, phone], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Registro Ok");
        }
    });
});

app.post("/createLink/:id", (req, res) => {
    const enlace = req.body.enlace;
    const band_id = req.params.id;
    
    db.query('INSERT INTO multimedia(band_id, enlace) VALUES (?, ?)', [band_id, enlace], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Registro Ok");
        } 
    });    
});


app.get("/bands", (req, res) => {
    db.query('SELECT * FROM bands', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get("/bands/:id", (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM bands WHERE id = ?', id, (err, result) => {
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
    const band_id = req.params.id;
  
    db.query('SELECT * FROM multimedia WHERE band_id = ?', band_id, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error en el servidor");
      } else {
        res.send(result);
      }
    });
  });



app.put("/update", (req, res) => {
    const name = req.body.name;
    const country = req.body.country;
    const genre = req.body.genre;
    const biography = req.body.biography;    
    const phone = req.body.phone;
    const id = req.body.id;
    

    db.query('UPDATE bands SET name = ?, country = ?, genre = ?, biography = ?, phone = ? WHERE id = ?', [name, country, genre, biography, phone, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Actualizado Ok");
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    

    db.query('DELETE FROM bands WHERE id = ?', id, (err, result) => {
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