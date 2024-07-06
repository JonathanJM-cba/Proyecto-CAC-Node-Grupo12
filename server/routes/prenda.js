//Manejo de las rutas para las prendas

const express = require("express");
const { getAllPrendas, getPrendaById } = require("../controllers/prenda");
const router = express.Router();

router.get("/", getAllPrendas);

router.get("/:id", getPrendaById);

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
