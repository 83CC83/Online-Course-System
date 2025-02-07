const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes").auth;
const courseRoute = require("./routes").course;
const passport = require("passport");
require("./config/passport")(passport);
const cors = require("cors");

// Connect ot MongoDB
mongoose
  .connect("mongodb://localhost:27017/mernDB")
  .then(() => {
    console.log("Connecting to mongodb...");
  })
  .catch((e) => {
    console.log(e);
  });

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user", authRoute);
// courseRoute needs to be protected
// If jwt not in request header, the request will be viewed as unauthorized
app.use(
  "/api/courses",
  passport.authenticate("jwt", { session: false }),
  courseRoute
);

// Only one that login can new or register a course
// jwt

// Port 3000: React
app.listen(8080, () => {
  console.log("Backend server is listening on port 8080...");
});
