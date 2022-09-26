const mysql2 = require("mysql")
const util = require("util")

const addForm = 
    async (req, res) => {
        try {
            let query = 'INSERT INTO '
        } catch (e) {
            console.error(e.message)
            res.status(413).send({"mensaje": e.message})
        }
    }
