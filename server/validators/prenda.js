const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorPrenda = [
  check("precio")
    .exists()
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .isLength({ max: 50 })
    .withMessage("No debe superar los 50 digitos"),
  check("stock")
    .exists()
    .notEmpty()
    .withMessage("El stock es obligatorio")
    .isNumeric()
    .isLength({ min: 1, max: 11 })
    .withMessage("Debe contener menos de 12 digítos"),
  check("descripcion")
    .isString()
    .isLength({ max: 100 })
    .withMessage("No debe contener más de 100 caracteres"),
  check("tienda")
    .isString()
    .isLength({ max: 50 })
    .withMessage("No debe contener más de 50 caracteres"),
  check("ubicacion")
    .isString()
    .isLength({ max: 100 })
    .withMessage("No debe contener más de 100 caracteres"),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = validatorPrenda;
