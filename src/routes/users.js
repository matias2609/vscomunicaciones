const express = require ("express");
const router = express.Router();

const User = require("../models/User");

const passport = require("passport");

router.get("/users/signin", (req, res) => {
    res.render("users/signin");
});

router.post("/users/signin", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/error",
    failureFlash: true
}));

router.get("/views/index", (req, res) => {
  res.render("views/index");
});

router.get("/users/error", (req, res) => {
  res.render("users/error");
});


router.get("/users/logout", (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect("/");
    });
  });
 
module.exports = router;
