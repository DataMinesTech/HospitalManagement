const app = require("./app");
const connectDB = require("./config/database");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });

//
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`);
});
