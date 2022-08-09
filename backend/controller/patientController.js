const Patients = require("../models/patientModel");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
//Create Patient

exports.createPatient = catchAsyncErrors(async (req, res) => {
  const patient = await Patients.create(req.body);

  console.log("patient", patient);

  res.status(201).json({
    success: true,
    patient,
  });
});

//Get All Patients

exports.getAllPatients = catchAsyncErrors(async (req, res) => {
  const apiFeatures = new ApiFeatures(Patients.find(), req.query).search();

  const patients = await apiFeatures.query;

  res.status(200).json({ success: true, patients });
});

// Get Patient Details

exports.getPatientDetails = catchAsyncErrors(async (req, res, next) => {
  const patient = await Patients.findById(req.params.id);

  if (!patient) {
    return next(new ErrorHandler("Patient Not Found ", 404));
  }

  res.status(200).json({ success: true, patient });
});

//Update patient

exports.updatePatient = catchAsyncErrors(async (req, res, next) => {
  let patient = await Patients.findById(req.params.id);

  if (!patient) {
    return res.status(500).json({
      success: false,
      message: "Patient not found",
    });
  }

  patient = await Patients.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    patient,
  });
});

//Delete Patient

exports.deletePatient = catchAsyncErrors(async (req, res, next) => {
  const patient = await Patients.findById(req.params.id);

  if (!patient) {
    return next(new ErrorHandler("Patient Not Found ", 500));
  }

  await patient.remove();

  res.status(200).json({
    success: true,
    message: "Patient Deleted Successfully",
  });
});
