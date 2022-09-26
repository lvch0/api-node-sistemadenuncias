const { sequelize } = require("../../config/db.config")
const { DataTypes, Sequelize } = require("sequelize")

export const Formulario = sequelize.define {
    "formulario",
    {
        idFormulario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING
        },
        denuncia: {
            type: DataTypes.STRING
        },
        {
            timestamp: true
        }
    }
}

