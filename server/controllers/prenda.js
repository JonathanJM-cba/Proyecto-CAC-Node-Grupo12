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

const createPrenda = async (req, res) => {
  try {
    const { body } = req;
    const newPrenda = await prendaModel.create(body);
    res.status(201).json(newPrenda);
  } catch (error) {
    console.log("Error al intentar crear una nueva prenda: ", error);
    handleHttpError(res, "ERROR_POST_PRENDA", 500);
  }
};

const updatePrenda = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const prenda = await prendaModel.findByPk(id);

    if (!prenda) {
      handleHttpError(res, "ERROR_PRENDA_NOT_FOUND", 403);
    }

    await prenda.update(body);
    res.status(200).json(prenda);
  } catch (error) {
    console.log("Error, no se pudo actualizar la peluquería: ", error);
    handleHttpError(res, "ERROR_PUT_PRENDA", 500);
  }
};

module.exports = { getAllPrendas, getPrendaById, createPrenda, updatePrenda };
