const bcryptjs = require("bcryptjs");
const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;

  const isEmail = await User.findOne({ email });

  if (isEmail) {
    throw RequestError(409, "Email in use");
  }

  const hashPassword = await bcryptjs.hash(password, 10);

  const newUser = await User.create({ email, password: hashPassword });

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = register;
