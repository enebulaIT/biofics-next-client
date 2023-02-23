import axios from 'axios';

const api = axios.create({
    baseURL: "https://biofics-admin.onrender.com"
});

export default api;