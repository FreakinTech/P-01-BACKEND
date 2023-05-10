const { validateUser } = require('../middleware/middleware')
const {addUserDB, getUserDB, getOneUserDB} = require('../repo/repos')

const addUser = async (req,res)=>{
    if(!req.body?.username && !req.body?.usermail && !req.body?.userpassword) return "All Fields are mandatory"
    const {username,usermail,userpassword} = req.body;
    // validateUser({usermail})
    await addUserDB({username,usermail,userpassword})
    return await res.send('User Added')
}

const getUser = async (req,res)=>{
    let {email,password} = req.params
    let result = await getUserDB(email,password)
    return await res.send({data:result})
}

const getOneUser = async (req,res)=>{
    const id = req.params.userId
    let result = await getOneUserDB(id)
    console.log("Mee",req.body.usermail)

    return await res.send({data:result})
}

module.exports = {addUser,getUser,getOneUser}
