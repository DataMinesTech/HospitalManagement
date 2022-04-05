const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("./errorHandler");
const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  console.log("token!", token);

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_Secret);

  req.user = await Users.findById(decodedData.id);
  console.log("req.user", req.user);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.userRole)) {
      return next(
        new ErrorHandler(
          `${userRole} is not allowed to access this resource`,
          403
        )
      );
    }

    next();
  };
};
