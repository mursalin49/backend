const User = require('../models/user.model');

// CREATE
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

// GET ALL
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};