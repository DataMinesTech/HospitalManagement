const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const user = require("./routes/userRoute");
const patient = require("./routes/patientRoute");
const room = require("./routes/roomRoute");

app.use("/api/v1", user);
app.use("/api/v1", patient);
app.use("/api/v1", room);

//Middleware Error
app.use(errorMiddleware);

module.exports = app;
