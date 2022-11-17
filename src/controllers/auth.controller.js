const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { v4: uuidv4 } = require("uuid")

const db = require("../../config/db.config")
const generateTokens = require("../../src/utils/jwt")
const { addRefreshTokenToWhitelist } = require("../services/auth.services")
const { findUserByName, createUserByNameAndPassword } = require("../services/users.services")

const authCtrl = {}

authCtrl.userRegister = async (req, res) => {
    try {
        const { nombre, contrasena } = req.body
        if (!nombre || !contrasena) {
            res.status(400)
            throw new Error("Necesita probeer el nombre y contraseña")
        }

        const existingUser = await findUserByName(nombre);
        if (existingUser) {
            res.status(400)
            throw new Error("El nombre de usuario ya existe.")
        }

        const usuario = await createUserByNameAndPassword({ nombre, contrasena })
        const jti = uuidv4()
        const { accessToken, refreshToken } = generateTokens(usuario.jti)
        await addRefreshTokenToWhitelist({jti, refreshToken, idUsuario: usuario.idUsuario})

        res.json({
            accessToken,
            refreshToken
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = userRegister



