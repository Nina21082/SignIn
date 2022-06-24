import axios from 'axios'

 export const http = axios.create({
  baseURL: 'https://testtesttest2176.herokuapp.com/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
  }
})
http.interceptors.request.use((config) => {
  config.headers = {
    Accept: 'application/json',
    ...config.headers
  }
  if (localStorage.access_token) {
    config.headers.Authorization = `Bearer ${localStorage.access_token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
http.interceptors.response.use((response) => response, (error) => {
  if (error?.response?.status === 401) {
    localStorage.clear();
    window.location.href = '/'
  }
  return Promise.reject(error);
});
