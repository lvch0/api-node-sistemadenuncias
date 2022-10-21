// const Router = require("express")
// const router = Router()

const { Router } = require("express");

const router = Router()

const formCtrl = require("../controllers/form.controller")

router.get("/", formCtrl.getForms)
router.get("/:id", formCtrl.getForm)
router.post("/", formCtrl.createForm)
router.put("/:id", formCtrl.updateForm)
router.delete("/:id", formCtrl.deleteForm)

module.exports = router