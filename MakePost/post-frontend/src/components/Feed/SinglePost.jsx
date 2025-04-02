import React, { useState, useRef, useContext } from 'react';
import API from '../../API/api';
import { useNavigate } from 'react-router-dom';
import { Button } from '../UI/Button';
import { AuthContext } from '../../store/AuthContext';

export const SinglePost = () => {
    const [post, setPost] = useState({
        title: "",
        image: null,
        content: ""
    });
    const [preview, setPreview] = useState(null);

    const authCtx = useContext(AuthContext)

    const navigate = useNavigate();
    const fileGet = useRef();

    function clickHandler() {
        fileGet.current.click();
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
            <form
                onSubmit={submitHandler}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-md bg-white p-8 rounded-lg shadow-2xl max-sm:scale-90"            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Create a Post</h2>
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
                        classes="bg-gradient-to-br from-blue-500  to-blue-950"
                    >
                        Submit Post
                    </Button>
                </div>
            </form >
        </>
    );
};