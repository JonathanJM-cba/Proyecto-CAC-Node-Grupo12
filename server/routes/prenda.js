//Manejo de las rutas para las prendas

const express = require("express");
const {
  getAllPrendas,
  getPrendaById,
  createPrenda,
  updatePrenda,
} = require("../controllers/prenda");
const router = express.Router();

router.get("/", getAllPrendas);

router.get("/:id", getPrendaById);

router.post("/", createPrenda);

router.put("/:id", updatePrenda);

router.delete("/:id", (req, res) => {
  res.send("Eliminar una prenda");
});

module.exports = router;
