const router = require("express").Router();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

// REGISTER
router.post("/register", async (req, res) => {
  // data validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check duplicated user
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email telah didaftarkan");

  // hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // create user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  // data validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check exisiting email
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email atau Password salah");

  // check exisiting password
  const validpass = await bcrypt.compare(req.body.password, user.password);
  if (!validpass) return res.status(400).send("Email atau Password salah");

  // assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);

  //res.send("Berhasil Masuk!");
});

module.exports = router;
