const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide a Name"],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please Provide a Valid Email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a Name"],
    minlength: 6,
    maxlength: 12,
  },
});

module.exports = mongoose.model("User", userSchema);
