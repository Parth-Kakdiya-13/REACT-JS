import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export default API;

// "https://my-post-backend.vercel.app",