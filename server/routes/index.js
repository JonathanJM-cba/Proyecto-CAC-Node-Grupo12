//Archivo que se utiliza para navegar entre las distintas rutas

const express = require("express");

const router = express.Router();

router.use("/prendas", require("./prenda"));
router.use("/categorias", require("./categoria"));
router.use("/*", (req, res) => {
  res.send("Página no existente :(");
});

module.exports = router;
