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
  patientDOB: {
    type: String,
    required: [true, "Please Enter Your Age"],
  },
  patientPhoneNo: {
    type: Number,
    required: [true, "Please Enter your Phone No"],
  },
  patientAddress: {
    type: String,
    required: [true, "Please Enter your Address"],
  },
  patientZIP: {
    type: String,
    required: [true, "Please Enter patient zip code"],
  },
  patientCity: {
    type: String,
    required: [true, "Please Enter your city"],
  },
  guardianName: {
    type: String,
  },
  guardianAddress: {
    type: String,
  },
  guardianPhone: {
    type: Number,
  },
  medicalHistory: {
    type: String,
  },
  vitals: {
    type: String,
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
  guardianZIP: {
    type: String,
    required: [true, "Please Enter guardian zip code"],
  },
  guardianCity: {
    type: String,
    required: [true, "Please Enter guardian city"],
  },
  patientAdmissionStatus: {
    type: String,
    // required: [true, "Please Enter Status of Admission of patient"],
    default: "Admitted Today",
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
