const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  userType:{ type: String, required: true},
  firstName:{ type: String, required: true},
  lastName:{ type: String, required: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  Class:{ type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema,'students');