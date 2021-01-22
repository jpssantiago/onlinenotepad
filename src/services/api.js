import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.portablelevel.com:443'
});

export default api;

// baseURL: 'https://138.197.224.184:3030'