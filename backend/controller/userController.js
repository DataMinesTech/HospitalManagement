const Users = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");

//Create User

exports.createUser = async (req, res) => {
  const user = await Users.create(req.body);

  res.status(201).json({
    success: true,
    user,
  });
};

// Register User

exports.registerUser = async (req, res) => {
  const {
    userName,
    userRole,
    status,
    phoneNo,
    password,
    email,
    attendance,
    address,
  } = req.body;

  const user = await Users.create({
    userName,
    userRole,
    status,
    phoneNo,
    password,
    email,
    attendance,
    address,
  });

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

// Get User Details

exports.getUserDetails = async (req, res, next) => {
  const user = await Users.findById(req.params.id);

  if (!user) {
    return next(new ErrorHandler("User Not Found ", 404));
  }

  res.status(200).json({ success: true, user });
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
