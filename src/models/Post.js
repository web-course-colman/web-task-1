const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model("Post", postSchema);
