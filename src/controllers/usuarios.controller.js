const { httpError } = require("../helpers/handleError")
const usuarioModel = require("../models/users.model")

const getItems = (req, res) => {

}
req, res
const getItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body   //Esto puede servir para el formulario
        const resDetail = await usuarioModel.create({
            
        })
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