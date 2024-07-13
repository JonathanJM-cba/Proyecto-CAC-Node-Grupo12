//Archivo que se encarga de establecer la conexion con la base de datos
const { Sequelize } = require("sequelize");
require("dotenv").config();

const database = process.env.DB_NAME || "prendas";
const username = process.env.DB_USER || "root";
const password = process.env.DB_PASS || "";
const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || 3307;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
  port: port,
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
