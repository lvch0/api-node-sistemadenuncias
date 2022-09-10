const express = require("express")
const router = express.Router()
const fs = require("fs")

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split(".").shift()
}

//Elimina la extesión de los index y descarta estos archivos
fs.readFileSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ["index"].includes(fileWithOutExt)
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //localhost/users
        console.log("CARGAR RUTA ==>", fileWithOutExt)
    }
    console.log("=>", removeExtension(file))
})

router.get("*", (req, res) => {
    res.status(404)
    res.send({ error: "Not Found" })
})

module.exports = router