const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  session: {
    type: Object,  
    required: true,
  },
  mentee: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }],
  is_booked: {
    type: Boolean,
    default: false,
  },
  bookAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);