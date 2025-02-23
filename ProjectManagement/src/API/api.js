import axios from "axios";

const API = axios.create({
    baseURL: "https://projectmanagement-backend.vercel.app"
})

export default API;