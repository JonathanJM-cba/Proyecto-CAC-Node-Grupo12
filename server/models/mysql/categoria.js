const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const Categoria = sequelize.define(
  "categoria",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "categoria",
    timestamps: false,
  }
);

module.exports = Categoria;
