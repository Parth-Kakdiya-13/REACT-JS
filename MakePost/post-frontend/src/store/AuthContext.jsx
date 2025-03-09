import { createContext, useState, useEffect } from "react";
import API from "../API/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);

    async function loginHandler(credentials) {
        try {
            const response = await API.post('/auth/login', credentials);
            console.log(response);

            if (response.status === 200) {
                localStorage.setItem("token", response?.data?.token);
                localStorage.setItem("userId", response?.data?.userId);
                setToken(response?.data?.token);
                setIsAuthenticated(true);
            } else {
                alert("login failed")
            }
        } catch (error) {
            console.log(error)
        }
    }


    const ctxValue = {
        login: loginHandler,
        isAuthenticated: isAuthenticated,
        token: token,
    }
    // console.log(user);

    return (
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    );
}