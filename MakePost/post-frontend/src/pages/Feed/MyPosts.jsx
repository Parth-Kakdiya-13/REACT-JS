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
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");


    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const fileGet = useRef();

    function clickHandler() {
        fileGet.current.click();
    }

    useEffect(() => {
        if (!localStorage.getItem("token")) return;

        async function fetchDataHandler() {
            try {
                const response = await API.get(`/feed/getPost/${localStorage.getItem("userId")}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (response.data?.posts?.length) {
                    setPosts(response.data.posts);
                    setLoading(false)
                } else {
                    alert("No posts found.");
                }
            } catch (error) {
                if (error.status === 404) {
                    setLoading(false)
                }
                // console.error("Error fetching posts:", error);
            }
        }
        fetchDataHandler();
    }, [authCtx.token, isEdit]);

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
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
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
        const response = await API.delete(`/feed/deletePost/${id}`, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            alert("deleted Successfull")
        }
    }

    function onClose() {
        navigate('/')
    }

    function onCloseEditBackDrop() {
        setIsEdit(false)
    }

    function openComments(post) {
        console.log(post);

        if (localStorage.getItem("token")) {
            setSelectedPost(post);
            setIsCommentOpen(true);
        } else {
            navigate('/login');
            alert("Login First...")
        }
    }


    if (loading) {
        return <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg>
        </div>;
    }

    if (posts.length === 0) {
        return <h2 className='text-center p-5'>No posts yet. Create the first post📭</h2>;
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
            {posts.map((data) => {
                const formattedDate = new Date(data.createdAt).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                });

                return (
                    <div key={data._id} className='relative flex flex-col items-start rounded-md shadow-2xl bg-white max-sm:mx-10'>
                        <button
                            type='button'
                            onClick={onClose}
                            className="absolute top-0 -right-8 p-2 rounded-r-xl text-gray-600 hover:text-gray-800 cursor-pointer bg-white"
                        >
                            ✖
                        </button>
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
                                <p className='text-gray-500 py-3'>{data.content}</p>
                                <div className='flex gap-2'>
                                    <Button
                                        classes="w-fit mt-2 bg-gradient-to-br from-fuchsia-500  to-blue-950"
                                        onClick={() => {
                                            setIsEdit(true);
                                            setCurrentPost(data);
                                            setPreview(`data:image/jpeg;base64,${data.image}`);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    <Button classes="w-fit mt-2 bg-gradient-to-br from-fuchsia-500  to-blue-950" onClick={() => deleteHandler(data._id)}>Delete</Button>
                                    <Button classes="w-fit mt-2 bg-gradient-to-br from-fuchsia-500  to-blue-950" onClick={() => openComments(data)}>Comments</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {isEdit && currentPost && (
                <div className="fixed inset-0 bg-black/0 backdrop-blur-sm flex items-center justify-center z-50">

                    <form
                        onSubmit={submitHandler}
                        className="relative w-full max-w-lg bg-white p-6 rounded-lg shadow-lg border border-gray-300 max-sm:mx-10"
                    >
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Create a Post</h2>
                        <button
                            type='button'
                            onClick={onClose}
                            className="absolute top-0 -right-8 p-2 rounded-r-xl text-gray-600 hover:text-gray-800 cursor-pointer bg-white"
                        >
                            ✖
                        </button>

                        {/* Title Input */}
                        <label className="block text-lg font-medium text-gray-700">Title:</label>
                        <input
                            className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:border-purple-500 focus:outline-none"
                            type="text"
                            name="title"
                            placeholder="Enter your post title"
                            value={currentPost.title}
                            onChange={changeHandler}
                            required
                        />

                        {/* Image Upload */}
                        <div className="mt-4">
                            <label className="block text-lg font-medium text-gray-700">Image:</label>
                            <div
                                className="w-full border border-dashed border-gray-400 rounded-lg p-3 flex flex-col items-center cursor-pointer hover:bg-gray-50 transition-all"
                                onClick={clickHandler}
                            >
                                <p className="text-gray-500">Click to upload image</p>
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    name="image"
                                    ref={fileGet}
                                    onChange={handleFileChange}
                                />
                            </div>
                            {preview && (
                                <div className="mt-3 flex justify-center">
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-40 h-40 object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Content Input */}
                        <label className="block mt-5 text-lg font-medium text-gray-700">Content:</label>
                        <textarea
                            className="w-full p-2 mt-1 rounded-md border border-gray-300 focus:border-purple-500 focus:outline-none resize-none"
                            name="content"
                            placeholder="Write something interesting..."
                            value={currentPost.content}
                            onChange={changeHandler}
                            rows="4"
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <div className='flex gap-2 items-center mt-5'>
                            <Button
                                type="submit"

                            >
                                Update
                            </Button>
                        </div>
                    </form>
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
