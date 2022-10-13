const { tipousuario } = require("../../config/db.config")
const db = require("../../config/db.config")
const usersCtrl = {}

usersCtrl.getUsers = async (req, res) => {
    try {
        const result = await db.usuario.findMany({
            include: {
                tipousuario: {
                    select: {
                        descripcion: true
                    }
                }
            }
        })
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

usersCtrl.getUser = async (req, res) => {
    try {
        const { id } = req.params
        const result = await db.usuario.findUnique({
            where: {
                idUsuario: Number(id)
            },
            include: {
                tipousuario: {
                    select: {
                        descripcion: true
                    }
                }
            }
        })
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

usersCtrl.createUser = async (req, res) => {
    try {
        const { nombre, contrasena, idtipousuario } = req.body
        const result = await db.usuario.create({
            data: {
                nombre,
                contrasena,
                tipousuario: {
                    connect: {
                        idTipoUsuario: Number(idtipousuario)
                    }
                }
            },
            include: {
                tipousuario: true
            }
        })
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

usersCtrl.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const result = await db.usuario.update({
            where: {
                idUsuario: Number(id)
            },
            data: req.body
        })
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

usersCtrl.deleteUser = (req, res) => {
    try {

    } catch (error) {

    }
}

module.exports = usersCtrl