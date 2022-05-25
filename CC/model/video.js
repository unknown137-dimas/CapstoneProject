const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  mentor: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  title: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  link: {
    type: String,
    required: true,
    min: 1,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Video", videoSchema);
