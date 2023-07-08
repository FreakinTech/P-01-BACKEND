const express = require("express")
const {addUser, getUser, getOneUser, getAllUsers} = require("../controller/controllers")
const { validateUser } = require("../middleware/middleware")
const router = express.Router()

router.post('/user',addUser)
router.get('/user',getAllUsers)
router.post('/user/auth',getUser)
router.get('/user/:userId',getOneUser)

module.exports = router