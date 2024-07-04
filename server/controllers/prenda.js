//Controlador para manejar las peticiones relacionadas a las prendas

const { prendaModel } = require("../models");
const handleHttpError = require("../utils/handleError");

const getAllPrendas = async (req, res) => {
  try {
    const prendas = await prendaModel.findAllWithCategoria();
    res.status(200).json(prendas);
  } catch (error) {
    console.log("Error, no se pudo obtener las prendas: ", error);
    handleHttpError(res, "ERROR_GET_ALL_PRENDAS", 500);
  }
};

module.exports = { getAllPrendas };
