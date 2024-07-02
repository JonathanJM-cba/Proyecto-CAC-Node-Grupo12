const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "Bienvenido a la API de Proyecto Final - CAC, tématica Prendas de Ropa!"
  );
});

app.listen(port, () => {
  console.log(`Servirdor escuchando en: http://localhost:${port}`);
});
