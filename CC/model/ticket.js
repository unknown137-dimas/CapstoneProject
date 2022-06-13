const mongoose = require("mongoose");
const User = require("./user");
const Webinar = require("./webinar");

const ticketSchema = new mongoose.Schema({
  webinar: {
    type: Object,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  is_booked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ticket", ticketSchema);
