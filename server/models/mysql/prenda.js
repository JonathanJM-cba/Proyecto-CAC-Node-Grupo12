const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");
const Categoria = require("./categoria");

const Prenda = sequelize.define(
  "prenda",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tienda: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    id_categoria: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: "categoria",
        key: "id",
      },
    },
  },
  {
    tableName: "prenda",
    timestamps: true,
  }
);

//Se define la asociación con la tabla categoria
Prenda.belongsTo(Categoria, {
  foreignKey: "id_categoria",
  as: "categoria",
});

//Método para obtener todas las prendas con el nombre de la categoría incluido
Prenda.findAllWithCategoria = function () {
  return this.findAll({
    include: {
      model: Categoria,
      as: "categoria",
      attributes: ["nombre"],
    },
  });
};

//Método para obtener una prenda por ID con el nombre de la cateogoría incluido
Prenda.findWithCategoria = function (id) {
  return this.findOne({
    where: { id },
    include: {
      model: Categoria,
      as: "categoria",
      attributes: ["nombre"],
    },
  });
};

module.exports = Prenda;
