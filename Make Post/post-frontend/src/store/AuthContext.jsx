import { createContext, useState, useEffect } from "react";
import API from "../API/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        API.get("/auth", { withCredentials: true })
            .then((res) => {
                setUser(res.data.user);
                setIsAuthenticated(true);
            })
            .catch(() => {
                setUser(null);
                setIsAuthenticated(false);
            });
    }, []);

    async function loginHandler(credentials) {
        try {
            const response = await API.post('/auth/login', credentials);
            if (response.status === 200) {
                setIsAuthenticated(true);
                setUser(res.data.user);
                alert("login successfull")
            } else {
                alert("login failed")
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function logoutHandler() {
        try {
            const response = await API.post('/auth/logout');

            if (response.status === 200) {
                setIsAuthenticated(false);
                setUser(null);
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    const ctxValue = {
        login: loginHandler,
        logout: logoutHandler,
        isAuthenticated: isAuthenticated,
        user: user
    }
    // console.log(user);

    return (
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    );
}