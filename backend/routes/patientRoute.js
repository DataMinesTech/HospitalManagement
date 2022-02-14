const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../controller/auth");
const {
  createPatient,
  getAllPatients,
  getPatientDetails,
  deletePatient,
  updatePatient,
} = require("../controller/patientController");

const router = express.Router();

router.route("/patients").get(getAllPatients);
router
  .route("/patient/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createPatient);
router
  .route("/patient/:id")
  .get(getPatientDetails)
  .delete(deletePatient)
  .put(updatePatient);

module.exports = router;
