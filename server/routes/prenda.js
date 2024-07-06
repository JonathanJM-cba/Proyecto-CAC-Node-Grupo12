//Manejo de las rutas para las prendas

const express = require("express");
const {
  getAllPrendas,
  getPrendaById,
  createPrenda,
  updatePrenda,
  deletePrenda,
} = require("../controllers/prenda");
const validatorPrenda = require("../validators/prenda");
const router = express.Router();

router.get("/", getAllPrendas);

router.get("/:id", getPrendaById);

router.post("/", validatorPrenda, createPrenda);

router.put("/:id", validatorPrenda, updatePrenda);

router.delete("/:id", deletePrenda);

module.exports = router;
