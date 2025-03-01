const Comment = require("../model/comment");
const Post = require('../model/post')

exports.createComment = async (req, res) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized: Invalid user" });
        }
        const { postId, text } = req.body;
        if (!postId || !text) {
            return res.status(400).json({ message: "Post ID and text are required" });
        }
        const comment = new Comment({
            postId,
            userId: req.user._id,
            text
        });
        await comment.save();
        await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });

        res.status(201).json({
            message: "Comment added successfully",
            comment
        });
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

