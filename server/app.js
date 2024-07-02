const express = require("express");
const cors = require("cors");
const { dbConnectionMySql } = require("./config/mysql");
require("dotenv").config();
const apiRouter = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "Bienvenido a la API de Proyecto Final - CAC, tématica Prendas de Ropa!"
  );
});

//TODO: localhost/api/[nombreRuta]
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Servirdor escuchando en: http://localhost:${port}`);
});

dbConnectionMySql();
