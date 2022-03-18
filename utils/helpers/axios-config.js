import axios from "axios";
import { tokenName } from "../Constants";

const baseUrl = `https://solershub-backend.herokuapp.com/api/v1/`;

const http = axios.create({
    baseURL: baseUrl,
    headers: { "Content-Type": "application/json" },
});

http.interceptors.request.use(
    function (config) {
        if (localStorage.getItem(tokenName)) {
            const token = localStorage.getItem(tokenName);
            config.headers.Authorization = `${token}`;
        }
        // console.log(config);
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;
