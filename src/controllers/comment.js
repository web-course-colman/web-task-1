const Comment = require("../models/Comment");

const addComment = async (req, res) => {
    try {
        const { postId, message, sender } = req.body;

        if (!postId || !message || !sender) {
            return res
                .status(400)
                .json({ message: "Post ID, message, and sender are required" });
        }

        const comment = new Comment({
            postId,
            message,
            sender,
        });

        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllComments = async (req, res) => {
    try {
        const filter = {};
        if (req.query.postId) {
            filter.postId = req.query.postId;
        }
        const comments = await Comment.find(filter).sort({ createdAt: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateComment = async (req, res) => {
    try {
        const { message, sender, postId } = req.body;

        // Note: Assuming full replacement logic similar to posts, but usually PUT implies full resource update.
        // If partial update is needed, use PATCH logic, but sticking to the pattern.

        // Validation matches Post controller logic roughly
        if (!message || !sender || !postId) {
            return res
                .status(400)
                .json({ message: "Post ID, message, and sender are required" });
        }

        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        comment.message = message;
        comment.sender = sender;
        comment.postId = postId; // Should we allow changing the post it belongs to? Assuming yes for full flexibility.

        const updatedComment = await comment.save();
        res.json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addComment,
    getAllComments,
    getCommentById,
    updateComment,
    deleteComment,
};
