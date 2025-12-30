const express = require("express");
const { addPost } = require("../controllers/post");

const router = express.Router();

// @route   POST /api/posts
// @desc    Add a new post
// @access  Public
router.post("/", addPost);

module.exports = router;
