const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
const usersCtrl = {}

usersCtrl.getUsers = async (req, res) => {
    try {
        const result = await prisma.usuario.findMany()
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}

usersCtrl.getUser = async (req, res) => {
    try {
        const { id } = req.params
        const result = await prisma.usuario.findUnique({
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
        const { nombreUsuario, contrasenia, rol } = req.body
        const result = await prisma.usuario.create({
            data: {
                nombreUsuario,
                contrasenia,
                rol
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
        const result = await prisma.usuario.update({
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