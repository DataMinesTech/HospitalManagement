const { is } = require("express/lib/request");
const res = require("express/lib/response");
const Users = require("../models/userModel");

//Create User
exports.createUser = async (req, res) => {
  const user = await Users.create(req.body);

  res.status(201).json({
    success: true,
    user,
  });
};

// Get All Users
exports.getAllUsers = async (req, res) => {
  const users = await Users.find();

  res.status(200).json({ success: true, users });
};

//Update User
exports.updateUser = async (req, res, next) => {
  let user = await Users.findById(req.params.id);

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User not found",
    });
  }

  user = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
};

//Delete User

exports.deleteUser = async (req, res, next) => {
  const user = await Users.findById(req.params.id);

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User not found",
    });
  }

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
};
