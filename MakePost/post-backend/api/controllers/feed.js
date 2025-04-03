const Post = require("../model/post");
const mongoose = require("mongoose");

// Custom Error Response Function
const handleError = (res, error, statusCode = 500) => {
  console.error(error); // Log error for debugging
  res.status(statusCode).json({ success: false, message: error.message || "Internal Server Error" });
};

// CREATE POST
exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const imagebase64 = req.file.buffer.toString("base64");

    const post = new Post({ title, image: imagebase64, content, creator: req.user });
    await post.save();

    res.status(201).json({ success: true, message: "Post created successfully", post });
  } catch (error) {
    handleError(res, error);
  }
};

// GET ALL POSTS
exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("creator", "name")
      .populate({
        path: "comments",
        select: "text createdAt",
        populate: {
          path: "userId",
          select: "name",
        },
      });

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    handleError(res, error);
  }
};

// GET POSTS BY USER ID
exports.getPost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid User ID" });
    }

    const userId = new mongoose.Types.ObjectId(req.params.id);
    const posts = await Post.find({ creator: userId })
      .populate("creator", "name email")
      .populate({
        path: "comments",
        populate: {
          path: "userId",
          select: "name",
        },
        select: "text createdAt",
      });

    if (!posts.length) {
      return res.status(404).json({ success: false, message: "No Posts Created Yet" });
    }

    res.status(200).json({ success: true, message: "Posts fetched successfully", posts });
  } catch (error) {
    handleError(res, error);
  }
};

// UPDATE POST
exports.updatePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid Post ID" });
    }

    const updateData = {
      title: req.body.title,
      content: req.body.content,
    };

    if (req.file) {
      updateData.image = req.file.buffer.toString("base64");
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, message: "Post updated successfully", updatedPost });
  } catch (error) {
    handleError(res, error);
  }
};

// DELETE POST
exports.deletePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid Post ID" });
    }

    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    handleError(res, error);
  }
};
