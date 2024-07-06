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

const getPrendaById = async (req, res) => {
  try {
    const { id } = req.params;
    const prenda = await prendaModel.findWithCategoria(id);

    if (!prenda) {
      console.log("No existe la una prenda con ID: ", id);
      handleHttpError(res, "ERROR_PRENDA_ID_NOT_FOUND", 404);
    }

    res.status(200).json(prenda);
  } catch (error) {
    console.log("Error al obtener la prenda por ID: ", error);
    handleHttpError(res, "ERROR_GET_PRENDA_BY_ID", 500);
  }
};

module.exports = { getAllPrendas, getPrendaById };
