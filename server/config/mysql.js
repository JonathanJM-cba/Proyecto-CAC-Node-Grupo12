//Archivo que se encarga de establecer la conexion con la base de datos
const { Sequelize } = require("sequelize");
require("dotenv").config();

const database = "prendas";
const username = "root";
const password = "";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
  port: 3307,
});

const dbConnectionMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log("CONECTADO A MySql");
  } catch (error) {
    console.log("ERROR, no se pudo conectar con la Base de Datos", error);
  }
};

module.exports = { sequelize, dbConnectionMySql };
