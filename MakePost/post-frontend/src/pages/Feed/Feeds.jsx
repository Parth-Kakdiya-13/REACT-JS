import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Header/Button';
import API from '../../API/api';
import CommentModal from '../../components/Header/Comment';

export const Feeds = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await API.get('/feed/getAll');
                if (response.status === 200) {
                    setPosts(response.data.data);
                    setLoading(false)
                } else {
                    console.log("Data not fetched");
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false)
            }
        }
        fetchData();
    }, [isCommentOpen]);


    function newPost() {
        if (localStorage.getItem("token")) {
            navigate('/singlepost');
        } else {
            navigate('/login');
            alert("Please log in first");
        }
    }

    function openComments(post) {
        if (localStorage.getItem("token")) {
            setSelectedPost(post);
            setIsCommentOpen(true);
        } else {
            navigate('/login');
            alert("Login First...")
        }
    }

    async function commentHandler(text) {
        if (!localStorage.getItem("token")) {
            alert("Please log in to comment.");
            return;
        }

        const newComment = {
            postId: selectedPost._id,
            text,
        };

        try {
            const response = await API.post('/comment/add', newComment, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            if (response.status === 201) {
                alert("Comment added!");
                setSelectedPost((prev) => ({
                    ...prev,
                    comments: [...(prev.comments || []), response.data.comment], // ✅ Append new comment
                }));
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    }

    if (loading) {
        return <div className=' text-gray-500 fixed top-72  bg-opacity-50 flex w-full justify-center place-self-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
        </div>;
    }


    return (
        <div>
            <Link>
                <Button classes="flex justify-center w-fit mx-auto bg-gray-500" type="button" onClick={newPost}>
                    New Post
                </Button>
            </Link>
            <div className='flex flex-col w-fit mx-auto gap-5 mt-5 justify-center'>
                {posts.length === 0 ? (
                    <h2 className='text-center p-5'>No posts yet. Create the first post📭</h2>
                ) : (
                    <div className='flex flex-col   w-fit mx-auto gap-5 mt-5 justify-center'>
                        {posts.map((data) => {
                            const formattedDate = new Date(data.createdAt).toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            });

                            return (
                                <div key={data._id} className='max-md:p-10 flex flex-col items-start rounded-md shadow-2xl'>
                                    <div className='flex w-full justify-between items-center p-5'>
                                        <h2 className='text-2xl capitalize font-semibold'>
                                            {data.creator ? data.creator.name : "Unknown"}
                                        </h2>
                                        <p className='text-gray-500'>{formattedDate}</p>
                                    </div>
                                    <div className='flex items-start max-md:flex-col '>
                                        <img className='w-60 h-full object-contain  rounded-tr-xl shadow-2xl' src={`data:image/jpeg;base64,${data.image}`} />
                                        <div className='w-full flex flex-col p-5'>
                                            <h2 className='text-xl capitalize font-sans'>{data.title}</h2>
                                            <p className='text-gray-500'>{data.content}</p>
                                            <Button classes="w-fit mt-2" onClick={() => openComments(data)}>
                                                Comment
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {selectedPost && (
                <CommentModal
                    isOpen={isCommentOpen}
                    onClose={() => setIsCommentOpen(false)}
                    comments={selectedPost.comments || []}
                    onCommentSubmit={commentHandler}
                />
            )}
        </div>
    );
};
