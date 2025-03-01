const Post = require('../model/post');
const mongoose = require('mongoose')

exports.createPost = async (req, res, next) => {
  const { title, content } = req.body;
  if (!req.file) {
    return res.status(400).json({ message: "Image is required" });
  }
  try {
    const imagebase64 = req.file.buffer.toString('base64');
    const post = new Post({ title, image: imagebase64, content, creator: req.user._id });
    await post.save();
    res.status(200).json({ message: post })
  } catch (error) {
    res.status(500).json({ message: error })
  }
};

exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("creator", "name") // Populate post creator's name
      .populate({
        path: "comments", // Populate comments
        select: "text createdAt", // Fetch comment text and timestamp
        populate: {
          path: "userId", // Populate commenter details
          select: "name" // Fetch only the user's name
        }
      });

    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};


exports.getPost = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.id);

    const posts = await Post.find({ creator: userId }).populate("creator", "name email").populate({
      path: "comments",
      populate: {
        path: "userId",
        select: "name",
      },
      select: "text createdAt",
    });

    if (!posts.length) {
      return res.status(404).json({ message: "No posts found for this user" });
    }

    res.status(200).json({ message: "Posts fetched successfully", posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.updatePost = async (req, res) => {
  const postId = req.params.id;

  try {
    const updateData = {
      title: req.body.title,
      content: req.body.content,
    };

    // Handle new image upload if available
    if (req.file) {
      updateData.image = req.file.buffer.toString("base64"); // Store image as base64
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, updateData, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


exports.deletePost = async (req, res) => {
  const postId = req.params.id

  try {
    const post = await Post.findByIdAndDelete(postId)
    if (!post) {
      res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}



