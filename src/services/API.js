import axios from "axios";
// const apiKey = process.env.REACT_APP_BASEURL;
// const apiKey = 'http://localhost:8000/api/v1';
// const apiKey = 'https://blood-band-app.onrender.com/api/v1';
const apiKey = 'https://blood-app-lkli.onrender.com/api/v1';


const API = axios.create({ baseURL:apiKey });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;