import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

const http = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(
  config => {
    console.info('calling api');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;
