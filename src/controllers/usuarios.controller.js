const { httpError } = require("../helpers/handleError")
const usuarioModel = require("../models/users.model")

const getItems = async (req, res) => {
    try {
        const listAll = await usuarioModel.findAll({})
        res.send({data: listAll})
    } catch (e) {
        httpError(res, e)
    }
}
req, res
const getItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body   //Esto puede servir para el formulario
        const resDetail = await usuarioModel.create({
            name, age, email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
}