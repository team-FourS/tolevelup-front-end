import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://44.198.225.181:8080',
    timeout: 5000,
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
});

export default axiosInstance;