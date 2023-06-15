const userModel = require("../schema/users");

const addUserDB = ({username,usermail,userpassword}) => {
  let store = new userModel({
      username: username,
      usermail: usermail,
      userpassword: userpassword,
  });
  store.save();
  return 
};

const getUserDB = async (email,password) => {
  let user = await userModel.find({usermail:email,userpassword:password});
  return user;
};


const getAllUsersDB = async () =>{
  let users = await userModel.find();
  return users;
}

const getOneUserDB = async (mail)=>{
   let query = await userModel.findOne({usermail:mail})
   return query
}

module.exports = { addUserDB, getUserDB,getOneUserDB,getAllUsersDB };
