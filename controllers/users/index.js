const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const googleUser = require("./googleUser");
const facebookUser = require("./facebookUser");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  googleUser,
  facebookUser,
  updateAvatar,
};
