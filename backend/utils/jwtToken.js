const sendToken = (user, statusCode, res) => {
  console.log(user, "useer");

  const token = user.getJWTToken();

  const options = {
    maxAge: 60 * 60 * 1000 * 24,
    httpOnly: true,
    sameSite: "lax",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
