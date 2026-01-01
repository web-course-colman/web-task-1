const express = require("express");
const {
    addComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment,
} = require("../controllers/comment");

const router = express.Router();

// @route   GET /comments?postId=<postId>
// @desc    Get all comments (optionally filtered by postId)
// @access  Public
router.get("/", getAllComments);

// @route   GET /comments/:id
// @desc    Get comment by ID
// @access  Public
router.get("/:id", getCommentById);

// @route   POST /comments
// @desc    Add a new comment
// @access  Public
router.post("/", addComment);

// @route   PUT /comments/:id
// @desc    Update comment by ID
// @access  Public
router.put("/:id", updateComment);

// @route   DELETE /comments/:id
// @desc    Delete comment by ID
// @access  Public
router.delete("/:id", deleteComment);

module.exports = router;
