const express = require("express");
const passport = require("../config/passport");
const User = require("../models/User");

const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.redirect("/login");

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.redirect(`/api/users/${user.id}/profile`);
    });
  })(req, res, next);
});

router.post("/signup", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.redirect("/login");
  } catch (err) {
    res.redirect("/signup");
  }
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
