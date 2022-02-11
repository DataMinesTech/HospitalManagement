const express = require("express");
const {
  createPatient,
  getAllPatients,
  getPatientDetails,
  deletePatient,
  updatePatient,
} = require("../controller/patientController");

const router = express.Router();

router.route("/patients").get(getAllPatients);
router.route("/patient/new").post(createPatient);
router
  .route("/patient/:id")
  .get(getPatientDetails)
  .delete(deletePatient)
  .put(updatePatient);

module.exports = router;
