import { useEffect, useState } from "react";
import API from "../API/api";
import { Button } from "../components/UI/Button";
import CommentModal from "../components/Feed/Comment";

export const MyPosts = () => {

    const [post, setPost] = useState([])
    const [selectedPost, setSelectedPost] = useState(null);
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    function openComments(post) {
        if (localStorage.getItem("token")) {
            setSelectedPost(post);
            setIsCommentOpen(true);
        } else {
            alert("login")
        }
    }

    function editHandler(id) {
        navigate(`/myposts/${id}`)
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

                setSelectedPost((prev) => ({
                    ...prev,
                    comments: [...(prev.comments || []), response.data.comment], // ✅ Append new comment
                }));
            }
        } catch (error) {
            console.error("Error adding comment:", error);
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
                setPost(response.data.posts);
            } catch (error) {
                setLoading(false)
                console.error("Error fetching posts:", error.response?.data || error.message);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div className='fixed left-1/2 top-1/2'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0" /></circle></svg> */}
            <p className=' text-2xl text-white'>Loading...</p>
        </div>;
    }

    return (
        <div>
            {post.length === 0 ? (
                <h2 className='text-center p-5'>No post yet. Create the first post📭</h2>
            ) : (
                <div className='w-full flex flex-col  gap-5 mt-5 justify-center '>
                    {post.map((data) => {
                        const formattedDate = new Date(data.createdAt).toLocaleString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        });

                        return (
                            <div key={data._id} className='w-full max-md:p-10 p-5 flex flex-col items-start rounded-md shadow-2xl bg-blue-900/50'>
                                <div className='flex w-full justify-between items-center px-5'>
                                    <h2 className='text-2xl capitalize font-semibold text-white'>
                                        {data.creator ? data.creator.name : "Unknown"}
                                    </h2>
                                    <p className='text-gray-500'>{formattedDate}</p>
                                </div>
                                <div className='flex items-start flex-col mt-5'>
                                    <img className='w-60 h-full object-contain  rounded-md shadow-2xl' src={`data:image/jpeg;base64,${data.image}`} />
                                    <div className='w-full flex flex-col p-5'>
                                        <h2 className='text-2xl text-white capitalize font-sans'>{data.title}</h2>
                                        <p className='text-gray-500'>{data.content}</p>
                                    </div>
                                </div>
                                <Button classes="w-fit h-10  bg-gradient-to-br from-blue-500  to-blue-950  to-blue-950" onClick={() => openComments(data)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zM4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v18l-4-4z" /></svg>
                                </Button>
                                <div className='flex items-center gap-2 mt-5'>
                                    <Button classes="w-fit h-10  bg-gradient-to-br from-blue-500  to-blue-950  to-blue-950" type="button" onClick={() => editHandler(data._id)}>
                                        Edit
                                    </Button>
                                    <Button classes="w-fit h-10  bg-gradient-to-br from-blue-500  to-blue-950  to-blue-950">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {selectedPost && (
                <CommentModal
                    isOpen={isCommentOpen}
                    onClose={() => setIsCommentOpen(false)}
                    comments={selectedPost.comments || []}
                    onCommentSubmit={commentHandler}
                />
            )}
        </div>
    )
}
