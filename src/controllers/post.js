const Post = require("../models/Post");

const addPost = async (req, res) => {
  try {
    const { message, sender } = req.body;

    if (!message || !sender) {
      return res
        .status(400)
        .json({ message: "Message and sender are required" });
    }

    const post = new Post({
      message,
      sender,
    });

    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPost,
  getAllPosts,
};
