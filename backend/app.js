const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

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
