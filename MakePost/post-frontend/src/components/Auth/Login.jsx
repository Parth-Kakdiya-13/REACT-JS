import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";
import API from "../../API/api";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        const graphqlQuery = {
            query: `
               mutation{
                    loginUser(userInput:{email:"${user.email}",password:"${user.password}"}){
                        token
                        userId
                    }
                }
            `
        }

        try {
            const response = await API.post('/graphql', graphqlQuery, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);

            if (response.status === 200) {
                localStorage.setItem("token", response?.data?.data?.loginUser?.token);
                localStorage.setItem("userId", response?.data?.data?.loginUser?.userId);
                navigate('/')
            } else {
                alert("login failed")
            }
        } catch (error) {
            console.error("errors", error);
            if (error.response.data.errors[0].data[0].message) {
                return setMessage(error.response.data.errors[0].data[0].message || "Validation error")
            } else if (error.response.data.errors[0].data[0].message) {
                return setMessage(error.response.data.errors[0].data[0].message)
            }
        }
        setUser({
            email: "",
            password: ""
        })
    }

    // function onClose() {
    //     navigate('/')
    // }


    function changeHandler(event) {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function dialogCloseHandler() {
        // setDialog(false);
        navigate("/");
    }

    return (
        <>
            {/* Login Form Container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white p-8 rounded-lg shadow-2xl max-sm:scale-90">
                {message && (
                    <div className="w-full mb-4 text-center text-white bg-green-500 py-2 rounded-lg">
                        {message}
                    </div>
                )}
                <form className="w-full" onSubmit={submitHandler}>
                    {/* Email Input */}
                    <label className="block text-lg font-semibold text-gray-700">
                        Email:
                    </label>
                    <input
                        className="p-2 mt-1 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        type="email"
                        value={user.email}
                        name="email"
                        onChange={changeHandler}
                        required
                    />

                    {/* Password Input */}
                    <label className="block text-lg font-semibold text-gray-700 mt-4">
                        Password:
                    </label>
                    <input
                        className="p-2 mt-1 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={changeHandler}
                        required
                    />

                    {/* Submit Button */}
                    <Button classes="w-full bg-gradient-to-br from-blue-500  to-blue-950 mt-5  text-white" type="submit">
                        Login
                    </Button>
                    <p className="text-gray-500 text-center  mt-5">Don't have Account. <span className="text-blue-900 cursor-pointer" onClick={() => navigate('/signup')}>Create New Account</span></p>
                </form>
            </div>
        </>
    );
};