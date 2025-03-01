import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Header/Button';
import API from '../../API/api';
import { AuthContext } from '../../store/AuthContext';
import CommentModal from '../../components/Header/Comment';

export const Feeds = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const navigate = useNavigate();
    const authctx = useContext(AuthContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await API.get('/feed/getAll');
                if (response.status === 200) {
                    // const filteredData = response.data.data.filter((list) => {
                    //     authctx.user._id != list.creator._id
                    // })
                    // console.log(filteredData);

                    setPosts(response.data.data);
                } else {
                    console.log("Data not fetched");
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        fetchData();
    }, []);


    function newPost() {
        if (authctx.isAuthenticated) {
            navigate('/singlepost');
        } else {
            navigate('/login');
            alert("Please log in first");
        }
    }

    function openComments(post) {
        if (authctx.isAuthenticated) {
            setSelectedPost(post);
            setIsCommentOpen(true);
        } else {
            navigate('/login');
            alert("Login First...")
        }
    }

    async function commentHandler(text) {
        if (!authctx.isAuthenticated) {
            alert("Please log in to comment.");
            return;
        }

        const newComment = {
            postId: selectedPost._id,
            text,
        };

        try {
            const response = await API.post('/comment/add', newComment);
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

    return (
        <div>
            <Link>
                <Button classes="flex justify-center w-fit mx-auto" type="button" onClick={newPost}>
                    New Post
                </Button>
            </Link>
            <div className='flex flex-col w-fit mx-auto gap-5 mt-5 justify-center'>
                {posts.map((data) => {
                    const formattedDate = new Date(data.createdAt).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    });

                    return (
                        <div key={data._id} className='flex flex-col items-start rounded-md shadow-2xl'>
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
