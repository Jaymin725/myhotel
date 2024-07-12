const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => res.render("login"));
router.get("/signup", (req, res) => res.render("signup"));

router.use("/", (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
});

router.get("/", (req, res) => res.render("index"));
router.get("/add-hotel", (req, res) => res.render("hotels-create"));

module.exports = router;
