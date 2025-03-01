import axios from "axios";

const API = axios.create({
    baseURL: "https://vercel.com/parths-projects-754f6040/post-backend",
    withCredentials: true
})

export default API;