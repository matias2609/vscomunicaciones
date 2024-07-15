const express = require ("express");
const router = express.Router();

const Post = require("../models/Post");
const { isAuthenticated } = require("../helpers/auth");


router.get("/posts", isAuthenticated, async (req, res) => {
    const posts = await Post.find({user: req.user.id}).lean().sort({date: "desc"});
    res.render("posts/all-posts", { posts });
});

router.get("/posts/pay", (req, res) => {
    res.render("posts/pay");
  });

module.exports = router;