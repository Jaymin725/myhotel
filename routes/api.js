const express = require("express");
const userRouter = require("./api/user");
const hotelRouter = require("./api/hotel");
const bookingRouter = require("./api/booking");

const router = express.Router();

router.use("/users", userRouter);
router.use("/hotels", hotelRouter);
router.use("/bookings", bookingRouter);

router.get("/", (req, res) => res.end("api router"));

module.exports = router;