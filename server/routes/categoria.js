const express = require("express");
const getAllCategorias = require("../controllers/categoria");
const router = express.Router();

//TODO: localhost/api/categorias
router.get("/", getAllCategorias);

module.exports = router;
