//Manejo de las rutas para las prendas

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Traer todas las prendas");
});

router.get("/:id", (req, res) => {
  res.send("Traer una prenda por ID");
});

router.post("/", (req, res) => {
  res.send("Agregar una nueva prenda");
});

router.put("/:id", (req, res) => {
  res.send("Editar una prenda");
});

router.delete("/:id", (req, res) => {
  res.send("Eliminar una prenda");
});

module.exports = router;
