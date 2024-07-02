//Controlador que devuelve todas las categorías

const { categoriaModel } = require("../models");
const handleHttpError = require("../utils/handleError");

const getAllCategorias = async (req, res) => {
  try {
    const categorias = await categoriaModel.findAll({});
    res.status(200).json(categorias);
  } catch (error) {
    console.log(
      "ERROR, no se pudo obtener las categorías de las prendas",
      error
    );
    handleHttpError(res, "ERROR_GET_ALL_CATEGORIAS", 500);
  }
};

module.exports = getAllCategorias;
