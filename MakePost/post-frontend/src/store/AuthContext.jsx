import { createContext, useState, useEffect } from "react";
import API from "../API/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        API.get("/auth", { withCredentials: true })
            .then((res) => {
                setUser(res?.data?.user);
                setIsAuthenticated(true);
            })
            .catch(() => {
                setUser(null);
                setIsAuthenticated(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log("Updated user state:", user);
    }, [user]);

    async function loginHandler(credentials) {
        try {
            const response = await API.post('/auth/login', credentials);
            if (response.status === 200) {
                setUser(response?.data?.user);
                setIsAuthenticated(true);
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
        user: user,
        loading: loading
    }
    console.log(user);

    return (
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    );
}