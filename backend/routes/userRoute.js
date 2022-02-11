const express = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserDetails,
  registerUser,
} = require("../controller/userController");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/user/new").post(registerUser);
router
  .route("/user/:id")
  .put(updateUser)
  .delete(deleteUser)
  .get(getUserDetails);

module.exports = router;
