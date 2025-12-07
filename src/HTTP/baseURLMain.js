import axios from "axios";

// Base URL of your backend API
const BASE_URL = "https://api-ecobuild.spireinfosys.com/api";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
