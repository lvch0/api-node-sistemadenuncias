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