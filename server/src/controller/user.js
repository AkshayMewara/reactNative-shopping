const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require('../models/user')

exports.register = async (req, res) => {
  try {
    const addingUserRecords = new User(req.body);
    var ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(req.body.password),
      "secret key 123"
    ).toString();
    // console.log(ciphertext);
    addingUserRecords.password = ciphertext;
    const insertUser = await addingUserRecords.save();
    res.status(201).send(insertUser);
  } catch (e) {
    res.status(400).send(e);
  }
};
exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await User.findOne({ email: email });
    var ciphertext = userEmail.password;
    var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    // var accessToken = jwt.sign(email, "helloworldthisisjsonwebtoken");
    const passwordOne = JSON.stringify(password);
    if (originalText === passwordOne) {
      res.status(200).send("success login");
    } else {
      return res.status(400).send("wrong password");
    }
  } catch (error) {
    res.status(400).send("Invalid Email");
  }
};
