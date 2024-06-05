// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.pythonanywhere.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
