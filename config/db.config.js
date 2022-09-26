const { Sequelize } = require("sequelize")
const mysql = require("mysql")
const util = require("util")

const database = process.env.DB_DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect:"mysql"
    }
)

const dbConnect = async () => {
    try {
        await sequelize.authenticate()
        console.log("Conexión en funcionamiento")
    } catch (e) {
        console.log("Error de conexión", e)
    }
}

const utilQuery = util.promisify(dbConnect.query)

module.exports = { sequelize, dbConnect, utilQuery }.bind(dbConnect)