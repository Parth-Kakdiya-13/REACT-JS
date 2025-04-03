import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from './UI/Button';
import API from '../API/api';

export const EditPost = () => {

    const [post, setPost] = useState({
        title: "",
        image: null,
        content: ""
    });
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

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

    async function editHandler(event) {
        const token = localStorage.getItem("token");

        event.preventDefault();

        // if (!post.image || !(post.image instanceof File)) {
        //     alert("Please select a valid image file.");
        //     return;
        // }

        const formData = new FormData();
        formData.append("title", post.title);
        formData.append("image", post.image);
        formData.append("content", post.content);
        try {


            const response = await API.put(`/feed/updatePost/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            });
            alert("updated successfully")
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem("token"); // Get JWT from localStorage
            const userId = localStorage.getItem("userId"); // Get userId

            try {
                const response = await API.get(`/feed/getPost/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send JWT in Authorization header
                    },
                });
                setLoading(false)
                setPost(response.data.posts[0]);
                if (response.data.posts[0].image) {
                    setPreview(`data:image/jpeg;base64,${response.data.posts[0].image}`); // Set initial preview
                }
            } catch (error) {
                setLoading(false)
                console.error("Error fetching posts:", error.response?.data || error.message);
            }
        }

        fetchData();
    }, []);

    console.log(post)

    return (
        <div>
            <form
                onSubmit={editHandler}
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
                    {/* {post.image && (
                        <div className="mt-3 flex justify-center">
                            <img
                                src={`data:image/jpeg;base64,${post.image}`}
                                alt="Preview"
                                className="w-40 h-40 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    )} */}
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
                        Save
                    </Button>
                </div>
            </form >
        </div>
    )
}
