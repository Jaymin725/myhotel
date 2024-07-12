const mongoose = require("../config/mongoose");

const booking = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
});

const Booking = mongoose.model("Booking", booking);

module.exports = Booking;
