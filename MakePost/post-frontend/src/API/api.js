import axios from "axios";

const API = axios.create({
    baseURL: "https://my-post-backend.vercel.app",
    withCredentials: true
})

export default API;

// "https://my-post-backend.vercel.app",