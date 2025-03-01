import React, { useContext, useEffect, useState, useRef } from 'react';
import API from '../../API/api';
import { AuthContext } from '../../store/AuthContext';
import { Button } from '../../components/Header/Button';
import { useNavigate } from 'react-router-dom';
import CommentModal from '../../components/Header/Comment';

export const MyPosts = () => {
    const [posts, setPosts] = useState([]); // Store all posts
    const [isEdit, setIsEdit] = useState(false);
    const [preview, setPreview] = useState(null);
    const [currentPost, setCurrentPost] = useState(null); // Track the post being edited
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);



    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const fileGet = useRef();

    function clickHandler() {
        fileGet.current.click();
    }

    useEffect(() => {
        if (!authCtx.user?._id) return;

        async function fetchDataHandler() {
            try {
                const response = await API.get(`/feed/getPost/${authCtx.user._id}`);
                if (response.data?.posts?.length) {
                    setPosts(response.data.posts);
                } else {
                    alert("No posts found.");
                }
            } catch (error) {
                if (error.status === 404) {
                    navigate('/')
                    alert("No Post Found. Plz create a post first");
                }
                // console.error("Error fetching posts:", error);
            }
        }
        fetchDataHandler();
    }, [authCtx.user, isEdit, posts]);

    function changeHandler(event) {
        const { name, value } = event.target;
        setCurrentPost((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            setCurrentPost((prevState) => ({
                ...prevState,
                image: file
            }));
            setPreview(URL.createObjectURL(file));
        }
    }

    async function submitHandler(event) {
        event.preventDefault();
        if (!currentPost.image) {
            alert("Please select an image.");
            return;
        }

        const formData = new FormData();
        formData.append("title", currentPost.title);
        formData.append("image", currentPost.image instanceof File ? currentPost.image : null);
        formData.append("content", currentPost.content);

        try {
            const response = await API.put(`/feed/updatePost/${currentPost._id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 200 || response.status === 201) {
                alert("Post updated successfully!");
                setPreview(null);
                setIsEdit(false);
                setPosts((prevPosts) =>
                    prevPosts.map((post) => (post._id === currentPost._id ? response.data.updatedPost : post))
                );
            } else {
                alert("Update failed.");
            }
        } catch (error) {
            console.error("Error updating post:", error);
            alert(error.response?.data?.message || "An error occurred.");
        }
    }

    async function deleteHandler(id) {
        const response = await API.delete(`/feed/deletePost/${id}`);
        if (response.status === 200) {
            alert("deleted Successfull")
        }
    }

    function openComments(post) {
        console.log(post);

        if (authCtx.isAuthenticated) {
            setSelectedPost(post);
            setIsCommentOpen(true);
        } else {
            navigate('/login');
            alert("Login First...")
        }
    }


    return (
        <div className='flex flex-wrap w-fit mx-auto gap-5 mt-5 justify-center'>
            {posts.length === 0 ? <p>No Post Created</p> : ""}
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
                        <div className='flex items-start max-md:flex-col max-md:items-start'>
                            <img className='w-60 h-full rounded-tr-xl  shadow-2xl' src={`data:image/jpeg;base64,${data.image}`} />
                            <div className='w-full flex flex-col p-5'>
                                <h2 className='text-xl capitalize font-sans'>{data.title}</h2>
                                <p className='text-gray-500'>{data.content}</p>
                                <div className='flex gap-2'>
                                    <Button
                                        classes="w-fit mt-2"
                                        onClick={() => {
                                            setIsEdit(true);
                                            setCurrentPost(data);
                                            setPreview(`data:image/jpeg;base64,${data.image}`);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button classes="w-fit mt-2" onClick={() => deleteHandler(data._id)}>Delete</Button>
                                    <Button classes="w-fit mt-2" onClick={() => openComments(data)}>Comments</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {isEdit && currentPost && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-[500px] max-w-full">
                        <form onSubmit={submitHandler} className='w-full rounded-xl'>
                            <label className='block'>
                                Title:
                                <input
                                    className='border-2 w-full border-fuchsia-900 p-1'
                                    type='text'
                                    name='title'
                                    value={currentPost.title}
                                    onChange={changeHandler}
                                />
                            </label>

                            <label className='block mt-5'>
                                Image:
                                <input
                                    className='border-2 block w-fit border-fuchsia-900'
                                    type='file'
                                    accept='image/*'
                                    name='image'
                                    ref={fileGet}
                                    onChange={handleFileChange}
                                />
                                <Button onClick={clickHandler}>Upload Image</Button>
                                <div className="mt-2">
                                    <p>Image Preview:</p>
                                    <img
                                        src={preview || `data:image/jpeg;base64,${currentPost.image}`}
                                        alt='Preview'
                                        className='w-40 h-40 object-cover mb-4 border border-gray-300 rounded-md'
                                    />
                                </div>
                            </label>

                            <label className='block mt-5'>
                                Content:
                                <input
                                    className='border-2 w-full border-fuchsia-900 p-1'
                                    type='text'
                                    name='content'
                                    value={currentPost.content}
                                    onChange={changeHandler}
                                />
                            </label>

                            <div className="flex gap-2 mt-5">
                                <button className='px-5 py-2 bg-fuchsia-900 text-white cursor-pointer' type='submit'>
                                    Submit
                                </button>
                                <button className='px-5 py-2 bg-gray-500 text-white cursor-pointer' type='button' onClick={() => setIsEdit(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {selectedPost && (
                <CommentModal
                    isOpen={isCommentOpen}
                    onClose={() => setIsCommentOpen(false)}
                    comments={selectedPost.comments || []}
                    onCommentSubmit={null}
                />
            )}
        </div>
    );
};
