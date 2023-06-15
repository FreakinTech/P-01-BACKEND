const { validateUser } = require("../middleware/middleware");
const {
  addUserDB,
  getUserDB,
  getOneUserDB,
  getAllUsersDB,
} = require("../repo/repos");

const addUser = async (req, res) => {
  try {
    if (!req.body?.username && !req.body?.usermail && !req.body?.userpassword)
      return "All Fields are mandatory";
    const { username, usermail, userpassword } = req.body;
    await addUserDB({ username, usermail, userpassword });
    return await res.send("User Added");
  } catch (err) {
    return await res.send(err);
  }
};

const getUser = async (req, res) => {
  try {
    let { email, password } = req.params;
    let result = await getUserDB(email, password);
    return await res.send({ data: result });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    let result = await getAllUsersDB();
    return await res.send({ data: result });
  } catch (err) {
    res.send(err);
  }
};

const getOneUser = async (req, res) => {
  try {
    const id = req.params.userId;
    let result = await getOneUserDB(id);
    return await res.send({ data: result });
  } catch (err) {
    res.send(err);
  }
};

module.exports = { addUser, getUser, getOneUser, getAllUsers };
