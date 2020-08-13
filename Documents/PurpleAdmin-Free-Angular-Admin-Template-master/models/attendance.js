const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { json } = require("express");

const attendanceSchema = mongoose.Schema({
  class:{ type: String, required: true},
  date:{ type: String, required: true},
  status:{type: JSON, required:true}
});

attendanceSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Attendance", attendanceSchema,'attendance');