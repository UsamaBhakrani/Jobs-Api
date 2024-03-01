const register = async (req, res) => {
  res.send("Register User");
};
const login = async (req, res) => {
  res.json({ login: "login User" });
};

module.exports = { register, login };
