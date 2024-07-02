const express = require("express");
const router = express.Router();

//TODO: localhost/api/categorias
router.get("/", (req, res) => {
  res.send("Traer todas las categorias");
});

module.exports = router;
