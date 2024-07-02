//Archivo que se encarga de manejar los distintos errores HTTP

const handleHttpError = (res, message = "", code = 403) => {
  res.status(code).send({ error: message });
};

module.exports = handleHttpError;
