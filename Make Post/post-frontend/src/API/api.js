import axios from "axios";

const API = axios.create({
    baseURL: "https://post-backend-eight.vercel.app",
    withCredentials: true
})

export default API;