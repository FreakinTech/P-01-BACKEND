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
  let users = await userModel.find({usermail:email,userpassword:password});
  return users;
};

const getOneUserDB = async (id)=>{
   let query = await userModel.findOne({_id:id})
   return query
}

module.exports = { addUserDB, getUserDB,getOneUserDB };
