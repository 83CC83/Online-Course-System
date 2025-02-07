const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").user;
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
  console.log("Receiving a request from auth");
  next();
});

router.get("/testAPI", (req, res) => {
  return res.send("Successfully connect to auth route...");
});

router.post("/register", async (req, res) => {
  // console.log("Register user...");
  // console.log(registerValidation(req.body));

  // Make sure data follows the rule
  let { error } = registerValidation(req.body);
  // console.log(error);
  if (error) return res.status(400).send(error.details[0].message);

  // Make sure email not registered before
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email has been registered...");

  // Create new user
  let { email, username, password, role } = req.body;
  let newUser = new User({ email, username, password, role });
  try {
    let savedUser = await newUser.save();
    return res.send({
      message: "User has been saved successfully...",
      savedUser,
    });
  } catch (e) {
    return res.status(500).send("User cannot be saved...");
  }
});

router.post("/login", async (req, res) => {
  let { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser)
    return res
      .status(401)
      .send(
        "User cannot be found. Please make sure whether the email is correct..."
      );

  foundUser.comparePassword(req.body.password, (err, isMatch) => {
    if (err) return res.status(500).send(err);

    if (isMatch) {
      // Create json web token
      const tokenObject = { _id: foundUser._id, email: foundUser.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      return res.send({
        message: "Login successfully",
        token: "JWT " + token,
        user: foundUser,
      });
    } else {
      return res.status(401).send("Wrong password");
    }
  });
});

module.exports = router;
