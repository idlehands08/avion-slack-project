import axios from 'axios';
import Cookies from 'js-cookie';

const TOKEN = Cookies.get('access-token');
const CLIENT = '';
const EXPIRY = 1626789364;
const UID = '';

// axios header init to access api
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // 'Content-Type': 'application/json',
    // 'access-token': `${TOKEN}`,
    // 'client': `${CLIENT}`,
    // 'expiry': EXPIRY,
    // 'uid': UID
  }
});

export default API;
