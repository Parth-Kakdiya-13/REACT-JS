import React, { useState } from "react";
import API from "../../API/api";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Header/Button";


export const SignUp = () => {
    const [user, setUser] = useState({
        email: "",
        name: "",
        password: "",
    });

    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        try {
            const response = await API.post("/auth/signup", user);
            if (response.status === 200) {
                navigate('/login')
                alert("Signup successful!");
            } else {
                alert("Signup failed!");
            }
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "An error occurred during signup.");
        }
        setUser({
            email: "",
            name: "",
            password: "",
        })
    }

    function changeHandler(event) {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className="flex w-[30rem] max-sm:w-full mx-auto mt-10 border-2 border-fuchsia-900 rounded-xl p-5">
            <form className="w-full" onSubmit={submitHandler}>
                <label className="block text-xl">Enter your email:</label>
                <input
                    className="p-1 mt-1 rounded-sm w-full border-2 border-gray-500"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={changeHandler}
                    required
                />

                <label className="block text-xl mt-5">Enter your Name:</label>
                <input
                    className="p-1 mt-1 rounded-sm w-full border-2 border-gray-500"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={changeHandler}
                    required
                />

                <label className="block text-xl mt-5">Enter your password:</label>
                <input
                    className="p-1 mt-1 rounded-sm w-full border-2 border-gray-500"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={changeHandler}
                    required
                />

                <Button
                    type="submit"
                    className="px-5 py-2 bg-fuchsia-900 text-white mt-5 cursor-pointer"
                >
                    SIGN UP
                </Button>
            </form>
        </div>
    );
};
