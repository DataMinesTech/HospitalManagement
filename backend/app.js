const express = require("express");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  // optionSuccessStatus: 200,
};

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const user = require("./routes/userRoute");
const patient = require("./routes/patientRoute");
const room = require("./routes/roomRoute");
const appointment = require("./routes/appointmentRoute");

app.use("/api/v1", user);
app.use("/api/v1", patient);
app.use("/api/v1", room);
app.use("/api/v1", appointment);

//Middleware Error
app.use(errorMiddleware);

module.exports = app;
