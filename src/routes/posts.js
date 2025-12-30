const express = require("express");
const {
  addPost,
  getAllPosts,
  getPostById,
  getPostsBySender,
} = require("../controllers/post");

const router = express.Router();

// @route   GET /api/posts
// @desc    Get all posts
// @access  Public
router.get("/", getAllPosts);

// @route   GET /api/posts/:id
// @desc    Get post by ID
// @access  Public
router.get("/:id", getPostById);

// @route   POST /api/posts
// @desc    Add a new post
// @access  Public
router.post("/", addPost);

// @route   GET /post?sender=<sender_id>
// @desc    Get posts by sender
// @access  Public
router.get("/", getPostsBySender);

module.exports = router;
