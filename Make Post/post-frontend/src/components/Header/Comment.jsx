import React, { useState } from "react";

const CommentModal = ({ isOpen, onClose, comments, onCommentSubmit }) => {
    const [newComment, setNewComment] = useState("");


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-[500px] max-w-full">
                <h2 className="text-xl font-bold mb-3">Comments</h2>
                <div className="max-h-96 overflow-y-auto space-y-3 mb-4">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => {
                            const formattedDate = new Date(comment.createdAt).toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            });
                            return <div key={index} className="flex  justify-between items-start bg-gray-100 p-3 rounded">
                                <div>
                                    <span className="text-xs text-gray-500 capitalize">
                                        {comment.userId ? comment.userId.name : "Unknown User"}
                                    </span>
                                    <p className="text-gray-800">{comment.text}</p>
                                </div>
                                <p className="text-xs font-mono text-gray-400 mt-auto">{formattedDate}</p>
                            </div>
                        })
                    ) : (
                        <p className="text-gray-500">No comments yet.</p>
                    )}
                </div>

                {onCommentSubmit === null ? "" :
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            className="border p-2 rounded w-full"
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => {
                                if (newComment.trim()) {
                                    onCommentSubmit(newComment);
                                }
                                setNewComment("")
                            }}
                        >
                            Comment
                        </button>
                    </div>}

                <button
                    className="absolute top-3 right-3 text-white text-3xl cursor-pointer"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default CommentModal;
