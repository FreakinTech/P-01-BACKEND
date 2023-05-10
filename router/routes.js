const express = require("express")
const {addUser, getUser, getOneUser} = require("../controller/controllers")
const { validateUser } = require("../middleware/middleware")
const router = express.Router()

router.post('/user',validateUser,addUser)
router.get('/user/:email/:password',getUser)
router.get('/user/:userId',getOneUser)

module.exports = router