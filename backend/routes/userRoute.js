const express = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/user/new").post(createUser);
router.route("/user/:id").put(updateUser).delete(deleteUser);

module.exports = router;
