const { Router } = require("express")

const router = Router()
const usersCtrl = require("../controllers/usuarios.controller")

router.get("/", usersCtrl.getUsers)
router.get("/:id", usersCtrl.getUser)
router.post("/", usersCtrl.createUser)
router.put("/:id", usersCtrl.updateUser)
router.delete("/:id", usersCtrl.deleteUser)

module.exports = router