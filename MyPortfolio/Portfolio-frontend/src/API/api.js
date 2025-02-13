import axios from "axios";

const API = axios.create({
    baseURL: "https://myportfoliobackend-seven.vercel.app"
})


export default API;
