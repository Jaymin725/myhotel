const express = require("express");
const Hotel = require("../../models/Hotel");
const Booking = require("../../models/Booking");

const router = express.Router();

router.get("/:userId/profile", async (req, res) => {
  const hotels = await Hotel.find({ owner: req.user.id });
  let bookings = await Booking.find({ customer: req.user.id }).populate(
    "hotel"
  );
  res.render("profile", { user: req.user, hotels, bookings });
});

router.get("/:userId/book/:hotelId", async (req, res) => {
  const newBooking = new Booking({
    customer: req.params.userId,
    hotel: req.params.hotelId,
  });
  await newBooking.save();
  res.redirect(`/api/users/${req.user.id}/profile`);
});

module.exports = router;
