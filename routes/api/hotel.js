const express = require("express");
const Hotel = require("../../models/Hotel");
const Booking = require("../../models/Booking");

const router = express.Router();

router.get("/", async (req, res) =>
  res.render("hotels", { userId: req.user.id, hotels: await Hotel.find({}) })
);

router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  newHotel.owner = req.user.id;
  await newHotel.save();
  res.redirect(`/api/users/${req.user.id}/profile`);
});

router.get("/:hotelId/delete", async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.hotelId);
  await Booking.deleteMany({ hotel: req.params.hotelId });
  res.redirect(`/api/users/${req.user.id}/profile`);
});

module.exports = router;
