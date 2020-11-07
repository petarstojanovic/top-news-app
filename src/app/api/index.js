import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'x-api-key': process.env.REACT_APP_API_ENDPOINT_API_KEY,
  },
});

export default API;
