// require("dotenv").config()
// const express = require("express")
// const cors = require("cors")
// const mysql = require("mysql")
// const util = require("util")
// const { dbConnect } = require("./config/db.config")
// const catRoutes = require("./routes/logins")
// const usuaRoutes = require("./src/routes/usuarios.routes")

// const app = express()
// const PORT = process.env.PORT || 3000

// app.use(cors())
// app.use(usuaRoutes)
// app.use(express.json())

// app.use("/api/1.0", require("./src/routes/usuarios.routes"))

// dbConnect()
// app.listen(PORT, () => {
//     console.log("Escuchando en puerto", PORT)
// })

const express = require("express")

const app = express()
const cors = require("cors")
const corsOptions = require("./config/corsOptions")

app.use(express.json())
app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.use("/api/users", require("./src/routes/usuarios.routes"))
app.use("/api/form", require("./src/routes/form.routes"))

app.listen(3001, () => {
    console.log("Escuchando en el puerto")
})


