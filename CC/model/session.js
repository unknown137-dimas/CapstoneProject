const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
    required: true
  },
  date: {
    type: Date,
    default: Date.toString,
  },
  bookList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
  }],
});

module.exports = mongoose.model("Session", sessionSchema);