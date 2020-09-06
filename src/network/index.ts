import axios from "axios";
import { PORT, SERVER } from "../config/network";

export const githubAPI = axios.create({
    baseURL: 'https://api.npms.io/v2/'
});

export const localAPI = axios.create({
    baseURL: `http://bundlephobia.herokuapp.com/api/`,
    headers: {
        "Content-Type": "application/json"
    }
});
