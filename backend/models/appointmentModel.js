const mongoose = require("mongoose");

const appointmentScheduledWith = mongoose.Schema({
  patientName: {
    type: String,
    required: [true, "Please Enter Patient Name"],
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Please Enter Patient Id"],
  },
  visitFor: {
    type: String,
    default: "checkup",
  },
  appointmentOn: {
    type: Date,
    required: [true, "Please Enter Schduled Appointment time"],
  },
});

const doctorsAttendingTheAppointment = mongoose.Schema({
  doctorName: {
    type: String,
    required: [true, "Please Enter Doctors Name"],
  },
});

const appointmentSchema = mongoose.Schema({
  appointmentName: {
    type: String,
    required: [true, "Please Enter Appointment Name"],
  },
  appointmentWith: [appointmentScheduledWith],
  anticipatedTime: {
    type: String,
    required: [true, "Please Enter Appointment Duration"],
  },
  doctorsAttending: [doctorsAttendingTheAppointment],
});

module.exports = mongoose.model("Appointments", appointmentSchema);
