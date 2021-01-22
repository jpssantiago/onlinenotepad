import axios from 'axios';

const api = axios.create({
    baseURL: 'http://159.65.219.48:3030'
});

export default api;