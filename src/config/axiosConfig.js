import axios from "axios";

export const customAxios = axios.create({
    baseURL: "http://13.125.225.199:8003"
})
