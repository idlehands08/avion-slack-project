import axios from 'axios';

// axios header init to access api
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default API;
