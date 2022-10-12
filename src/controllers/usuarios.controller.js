const  db  = require("../../config/db.config")
const usersCtrl = {}

usersCtrl.getUsers = async (req, res) => {
    try {
        const result = await db.usuario.findMany()
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
                IdUsuario: Number(id)
            },
        })
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

usersCtrl.createUser = async (req, res) => {
    try {
        const { nombre, contrasena, idTipousuario } = req.body
        const result = await db.usuario.create({
            data: {
                nombre,
                contrasena,
                idTipoUsuario: {
                    connect: {
                        idTipoUsuario: Number(idTipousuario)
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
                IdUsuario: Number(id)
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