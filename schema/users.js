const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const Users = new Schema({
            username:String,
            usermail:String,
            userpassword:String
})

const userModel = mongoose.model("users",Users)
module.exports = userModel