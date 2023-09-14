import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001", //8080
});

export default instance;
