const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  expertise: {
    type: String,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  video:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  }],
  mentee:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  session:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session'
  }],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("mentor", MentorSchema);
