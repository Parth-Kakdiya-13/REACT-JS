import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API/api";
import { Button } from "../../components/UI/Button";


export const SignUp = () => {
    const [user, setUser] = useState({
        email: "",
        name: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function onClose() {
        navigate('/')
    }

    async function submitHandler(event) {
        event.preventDefault();
        try {
            const response = await API.post("/auth/signup", user);
            if (response.status === 200) {
                setMessage("Signup successful!");
                setTimeout(() => {
                    navigate("/login");
                    onClose();
                }, 1500);
            } else {
                setMessage("Signup failed!");
            }
        } catch (error) {
            console.error(error);
            setMessage(error.response?.data?.message || "An error occurred during signup.");
        }
        setUser({
            email: "",
            name: "",
            password: "",
        });
    }

    function changeHandler(event) {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white p-8 rounded-lg shadow-2xl max-sm:scale-90">

            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>

            {message && (
                <div className="w-full mb-4 text-center text-white bg-green-500 py-2 rounded-lg">
                    {message}
                </div>
            )}

            <form className="w-full" onSubmit={submitHandler}>
                {/* Email Input */}
                <label className="block text-lg font-semibold text-gray-700">Email:</label>
                <input
                    className="p-2 mt-1 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={changeHandler}
                    required
                />

                {/* Name Input */}
                <label className="block text-lg font-semibold text-gray-700 mt-4">Name:</label>
                <input
                    className="p-2 mt-1 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={changeHandler}
                    required
                />

                {/* Password Input */}
                <label className="block text-lg font-semibold text-gray-700 mt-4">Password:</label>
                <input
                    className="p-2 mt-1 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={changeHandler}
                    required
                />

                {/* Submit Button */}
                <Button classes="w-full bg-gradient-to-br from-blue-500  to-blue-950 mt-5  text-white" type="submit">
                    Sign up
                </Button>
                <p className="text-gray-500 text-center  mt-5">Already have an Account. <span className="text-blue-900 cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>

            </form>
        </div>
    );
};