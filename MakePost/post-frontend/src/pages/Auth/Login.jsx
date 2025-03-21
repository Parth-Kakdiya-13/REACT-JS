import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Header/Button";
import { AuthContext } from "../../store/AuthContext";
import { Dialog } from "../../components/Dialog";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [dialog, setDialog] = useState(false);
    const [text, setText] = useState("");

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    async function submitHandler(event) {
        event.preventDefault();
        try {
            await authCtx.login(user);
            setDialog(true);
            setText("Login Successful");
        } catch (error) {
            if (error.response) {
                setText("Login Failed");
                setDialog(true);
                console.error(error);
            }
        }
    }

    function onClose() {
        navigate('/')
    }


    function changeHandler(event) {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function dialogCloseHandler() {
        setDialog(false);
        navigate("/");
    }

    return (
        <>
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-40"></div>

            {/* Login Form Container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white p-8 rounded-lg shadow-2xl max-sm:scale-90">
                {/* Dialog for Success/Error */}
                {dialog && <Dialog text={text} onClick={dialogCloseHandler} logo={true} />}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute -top-8 right-0 p-2 rounded-t-xl text-gray-600 hover:text-gray-800 cursor-pointer bg-white"
                >
                    ✖
                </button>

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
                    <Button classes="w-full mt-5 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all" type="submit">
                        Login
                    </Button>
                    <p className="text-gray-500 text-center  mt-5">Don't have Account. <span className="text-fuchsia-500 cursor-pointer" onClick={() => navigate('/signup')}>Create New Account</span></p>
                </form>
            </div>
        </>
    );
};
