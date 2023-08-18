const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    userId: String,
    description: String,
    duration: Number,
    date: String
  },
  {
  versionKey: false
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;


