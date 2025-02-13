import axios from "axios";

const API = axios.create({
    baseURL: "https://myportfoliobackend-eight.vercel.app"
})


export default API;
