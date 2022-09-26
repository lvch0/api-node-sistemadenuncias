// const mysql = require("mysql")
const util = require("util")

const addUser = 
    async (req, res) => {
        try {

            //verifica que se haya ingresado un usuario
            if (!req.body.nombreUsuario) {
                throw new Error("¡Se debe ingresar un nombre para la creación de usuario!")
            }

            //valida que no se ingrese un nombre en blanco
            if (/^\s+$/.test(req.body.nombreUsuario)) {
                throw new Error("¡No es posible ingresar espacios en blanco!")
            }

            const nombreUpperCased = req.body.nombreUsuario.toUpperCase()

            //verifica si el nombre existe
            let query = 'SELECT nombreDelCampo FROM nombreDeLaTabla WHERE nombreDelCampo = ?'

            let response = await utilQuery(query, nombreUpperCased)

            if (response.length > 0) {
                throw new Error("¡El usuario ya existe!")
            }

            query = "INSERT INTO tablaBD VALUES (?)"

            response = await utilQuery(query, nombreUpperCased)

            res.status(200).send({ 
                "respuesta": response.insertId,
                "nombre:": nombreUpperCased
            })
        }
        catch (e) {
            console.error(e.message)
            res.status(413).send({ "mensaje": e.message})
        }
        
    }


