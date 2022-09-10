require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const util = require("util")
const { dbConnect } = require("./config/db.config")
const catRoutes = require("./routes/logins")

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(catRoutes)
app.use(express.json())

app.use("/api/1.0", require("./src/routes"))

dbConnect()
app.listen(PORT, () => {
    console.log("Escuchando en puerto", PORT)
})


