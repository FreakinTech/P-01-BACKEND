const { getOneUserDB } = require("../repo/repos");

const validateUser = async (req, res, next) => {
  try {
    let usermail = req.body.usermail;
    const user = await getOneUserDB(usermail);
    if (!user) next();
    else res.send("USER ALREADY EXIST");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { validateUser };
