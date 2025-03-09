import React, { useState, useRef } from 'react';
import API from '../../API/api';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Header/Button';

export const SinglePost = () => {
    const [post, setPost] = useState({
        title: "",
        image: null,
        content: ""
    });
    const [preview, setPreview] = useState(null);

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
        const file = event.target.files[0];  // Fix: `files` instead of `file`
        if (file) {
            setPost((prevState) => ({
                ...prevState,
                image: file
            }));
            setPreview(URL.createObjectURL(file)); // Generate a preview URL
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
            const token = localStorage.getItem("token"); // ✅ Get JWT token

            const response = await API.post('/feed/post', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}` // ✅ Correct header placement
                }
            });

            if (response.status === 200 || response.status === 201) {
                navigate('/');
                alert("Data submitted successfully!");
                setPost({ title: "", image: null, content: "" }); // Reset form
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
        <div>
            <form onSubmit={submitHandler} className='w-1/2 mx-auto mt-10 border-2 border-fuchsia-900 p-5 rounded-xl'>
                <label className='block'>
                    Title:
                    <input
                        className='border-2 w-full border-fuchsia-900 p-1'
                        type='text'
                        name='title'
                        value={post.title}
                        onChange={changeHandler}
                    />
                </label>

                <label className='block mt-5'>
                    Image:
                    <input
                        className='border-2 block w-fit border-fuchsia-900'
                        type='file'
                        hidden
                        accept='image/*'
                        name='image'
                        ref={fileGet}
                        onChange={handleFileChange}
                    />
                    <Button classes="block" onClick={clickHandler}>Upload Image</Button>
                    {preview && (
                        <div>
                            <p>Image Preview:</p>
                            <img
                                src={preview}
                                alt='Preview'
                                className='w-40 h-40 object-cover mb-4'
                            />
                        </div>
                    )}
                </label>

                <label className='block mt-5'>
                    Content:
                    <input
                        className='border-2 w-full border-fuchsia-900 p-1'
                        type='text'
                        name='content'
                        value={post.content}
                        onChange={changeHandler}
                    />
                </label>

                <button className='px-5 py-2 bg-fuchsia-900 text-white mt-5 cursor-pointer' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};
