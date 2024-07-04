//Archivo que se utiliza para definir un objeto que contiene las llamda a los diferentes modelos

const models = {
  categoriaModel: require("./mysql/categoria"),
  prendaModel: require("./mysql/prenda"),
};

module.exports = models;
