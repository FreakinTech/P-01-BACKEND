const { getOneUserDB } = require("../repo/repos")

const validateUser =async (req,res,next)=>{
    let usermail = req.body.usermail
    const user = await getOneUserDB(usermail)
    if(!user) next()
    else res.send("USER ALREADY EXIST")
}

module.exports = {validateUser}