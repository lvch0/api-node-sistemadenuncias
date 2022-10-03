// const { httpError } = require("../helpers/handleError")
// const usuarioModel = require("../models/Usuario.model")

// const getItems = async (req, res) => {
//     try {
//         const listAll = await usuarioModel.Usuario.findAll({})
//         res.send({data: listAll})
//     } catch (e) {
//         httpError(res, e)
//     }
// }
// // req, res
// const getItem = async (req, res) => {
//     try {
//         const user = await usuarioModel.Usuario.f
//         // const user = 'SELECT * FROM usuario WHERE idUsuario = ?'
//         res.send({data: user})
//     } catch (e) {
//         httpError(res, e)
//     }
// }

// const createItem = async (req, res) => {
//     try {
//         const { name, age, email } = req.body   //Esto puede servir para el formulario
//         const resDetail = await usuarioModel.create({
//             name, age, email
//         })
//         res.send({ data: resDetail })
//     } catch (e) {
//         httpError(res, e)
//     }
// }

// const updateItem = (req, res) => {

// }

// const deleteItem = (req, res) => {

// }

// const addItem = async (req, res) => {
//     const {nombreUsuario, }
// }

// module.exports = {
//     getItem,
//     getItems,
//     createItem,
//     updateItem,
//     deleteItem
// }

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