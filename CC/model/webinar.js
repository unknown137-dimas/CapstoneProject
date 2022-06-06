const mongoose = require("mongoose");

const webinarSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  date: {
    type: Date,
    default: Date.toString,
  },
});

module.exports = mongoose.model("webinar", webinarSchema);
