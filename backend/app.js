const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

const user = require("./routes/userRoute");
const patient = require("./routes/patientRoute");

app.use("/api/v1", user);
app.use("/api/v1", patient);

//Middleware Error
app.use(errorMiddleware);

module.exports = app;
