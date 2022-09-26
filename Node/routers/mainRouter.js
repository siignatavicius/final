const express = require("express")
const router = express.Router()
const { register, login, autoLogin, logout, addphoto, getmyphotos, allphotos } = require("../controllers/mainController")
const {validateRegister} = require("../modules/validator")


router.post("/register", validateRegister, register)
router.post("/login", login)
router.get("/autologin", autoLogin)
router.get("/logout", logout)
router.post("/addphoto", addphoto)
router.get("/getmyphotos", getmyphotos)
router.get("/allphotos", allphotos)









module.exports = router