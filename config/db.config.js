const { Sequelize } = require("sequelize")
const mysql = required("mysql")

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

module.exports = { sequelize, dbConnect }