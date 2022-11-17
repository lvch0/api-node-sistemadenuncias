const bcrypt = require("bcrypt")
const db = require("../../config/db.config")

function findUserByName(nombre) {
    return db.usuario.findUnique({
        where: {
            nombre
        }
    })
}

function createUserByNameAndPassword(usuario) {
    usuario.contrasena = bcrypt.hashSync(usuario.contrasena, 12)

    return db.usuario.create({
        data: usuario
    })
}

function findUserById(id) {
    return db.usuario.findUnique({
        where: {
            id
        }
    })
}

module.exports = {
    findUserByName,
    findUserById,
    createUserByNameAndPassword
}