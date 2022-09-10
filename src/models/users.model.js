const { sequelize } = require("../../config/db.config")
const { Datatypes, DataTypes } = require("sequelize")

const Usuario = sequelize.define(
    "usuarios",
    {
        nombreUsuario: {
            type: Datatypes.VARCHAR,
            allowNull: false
        },
        contraseña: {
            type: DataTypes.VARCHAR
        },
        rol: {
            type: DataTypes.ENUM(["gestor", "secretario", "inspector", "director"])
        }
    },
    {
        timestamps: true
    }
)


module.exports = Usuario