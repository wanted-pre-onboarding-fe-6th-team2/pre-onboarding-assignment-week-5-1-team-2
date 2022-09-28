import axios from 'axios';
import { BASE_API_URL, HTTP_METHODS } from '@/constants/api';

const createHttpRequest = axios.create({
  baseURL: BASE_API_URL,
});

const createApiMethod = (axiosInstance, methodType) => config => {
  return axiosInstance({
    method: methodType,
    ...config,
  });
};

createHttpRequest.interceptors.response.use(
  response => {
    console.info('calling api');
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const http = {
  get: createApiMethod(createHttpRequest, HTTP_METHODS.GET),
  post: createApiMethod(createHttpRequest, HTTP_METHODS.POST),
  put: createApiMethod(createHttpRequest, HTTP_METHODS.PUT),
  delete: createApiMethod(createHttpRequest, HTTP_METHODS.delete),
};

export default http;
