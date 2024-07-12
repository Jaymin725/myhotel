const express = require("express");
const Booking = require("../../models/Booking");

const router = express.Router();

router.get("/:bookingId/delete", async (req, res) => {
  await Booking.findByIdAndDelete(req.params.bookingId);
  res.redirect(`/api/users/${req.user.id}/profile`);
});

module.exports = router;
