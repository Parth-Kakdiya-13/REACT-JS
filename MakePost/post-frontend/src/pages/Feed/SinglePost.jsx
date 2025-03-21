import React, { useState, useRef, useContext } from 'react';
import API from '../../API/api';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Header/Button';
import { Dialog } from '../../components/Dialog';
import { AuthContext } from '../../store/AuthContext';

export const SinglePost = () => {
    const [post, setPost] = useState({
        title: "",
        image: null,
        content: ""
    });
    const [preview, setPreview] = useState(null);
    const [dialog, setDialog] = useState(false);
    const [text, setText] = useState("");

    const authCtx = useContext(AuthContext)

    const navigate = useNavigate();
    const fileGet = useRef();

    function clickHandler() {
        fileGet.current.click();
    }

    function goToMyPostHandler() {
        if (!localStorage.getItem("token")) {
            setDialog(true)
            setText("Login First")
        } else {
            navigate('/myposts')
        }
    }

    function onClose() {
        navigate('/')
    }
    function changeHandler(event) {
        const { name, value } = event.target;
        setPost((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            setPost((prevState) => ({
                ...prevState,
                image: file
            }));
            setPreview(URL.createObjectURL(file));
        }
    }

    async function submitHandler(event) {
        event.preventDefault();

        if (!post.image || !(post.image instanceof File)) {
            alert("Please select a valid image file.");
            return;
        }

        const formData = new FormData();
        formData.append("title", post.title);
        formData.append("image", post.image);
        formData.append("content", post.content);

        try {
            const token = localStorage.getItem("token");

            const response = await API.post('/feed/post', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.status === 200 || response.status === 201) {
                navigate('/');
                alert("Data submitted successfully!");
                setPost({ title: "", image: null, content: "" });
                setPreview(null);
            } else {
                alert("Data submission failed.");
            }
        } catch (error) {
            console.error("Error submitting data:", error);
            alert(error.response?.data?.message || "An error occurred while submitting.");
        }
    }

    return (
        <>
            {dialog && <Dialog text={text} />}
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
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
                        value={post.title}
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
                        value={post.content}
                        onChange={changeHandler}
                        rows="4"
                        required
                    ></textarea>

                    {/* Submit Button */}
                    <div className='flex gap-2 items-center mt-5'>
                        <Button
                            type="submit"

                        >
                            Submit Post
                        </Button>
                        <Button classes="bg-gradient-to-br from-fuchsia-500  to-blue-950" onClick={() => localStorage.getItem("token") ? navigate('/myposts') : navigate('/')}>My Posts</Button>
                        <Button onClick={() => { authCtx.logout(); navigate('/') }}>Logout</Button>
                    </div>
                </form >
            </div >
        </>
    );
};
