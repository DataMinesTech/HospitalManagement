const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please Enter userName"],
    maxLength: [30, "Name should not exceed 30 characters"],
    minlength: [4, "Name should not have less than 5 characters"],
  },
  userRole: {
    type: String,
    default: "patient",
  },
  userAvailability: {
    type: String,
    required: [true, "Please Enter Availabilty"],
    default: "Available",
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  phoneNo: {
    type: Number,
    required: [true, "Please Enter your Phone No"],
  },
  address: {
    type: String,
    required: [true, "Please Enter your Address"],
  },
});

module.exports = mongoose.model("Users", userSchema);
