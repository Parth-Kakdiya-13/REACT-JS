import { createContext, useState, useEffect } from "react";
import API from "../API/api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);


    async function loginHandler(credentials) {

        const graphqlQuery = {
            query: `
               mutation{
                    loginUser(userInput:{email:"${credentials.email}",password:"${credentials.password}"}){
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

    function logoutHandler() {
        localStorage.removeItem("token")
    }


    const ctxValue = {
        login: loginHandler,
        isAuthenticated: isAuthenticated,
        token: token,
        logout: logoutHandler
    }
    // console.log(user);

    return (
        <AuthContext.Provider value={ctxValue}>
            {children}
        </AuthContext.Provider>
    );
}