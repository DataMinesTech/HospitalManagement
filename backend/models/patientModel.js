const mongoose = require("mongoose");
const validator = require("validator");

const patientSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: [true, "Please Enter Name"],
    maxLength: [30, "Name should not exceed 30 characters"],
    minlength: [4, "Name should not have less than 5 characters"],
  },
  patientGender: {
    type: String,
    required: [true, "Please Enter Gender"],
  },
  patientEmail: {
    type: String,
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  patientPhoneNo: {
    type: Number,
    required: [true, "Please Enter your Phone No"],
  },
  patientAddress: {
    type: String,
    required: [true, "Please Enter your Address"],
  },
  patientAge: {
    type: Number,
    required: [true, "Please Enter Your Age"],
  },
  patientBloodGroup: {
    type: String,
  },
  patientMaritalStatus: {
    type: String,
  },
  patientOccupation: {
    type: String,
  },
  patientAdmissionStatus: {
    type: String,
    required: [true, "Please Enter Status of Admission of patient"],
  },
  patientAppointment: {
    type: Date,
    default: Date.now,
  },
  patientInRoom: {
    type: Number,
    default: 0,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
