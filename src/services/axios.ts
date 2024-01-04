// apiService.js
import axios from "axios";
import { getCookie } from "cookies-next";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // Replace with your API base URL
console.log(BASE_URL);

const apiService = axios.create({
  baseURL: BASE_URL,
  //   timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// Interceptors (optional): You can use interceptors to handle requests or responses globally.

// Request interceptor
apiService.interceptors.request.use(
  (config: any) => {
    const token = getCookie("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
      console.log(token);
    }
    // config.headers["Content-Type"] = "application/json";
    // You can modify the request config here (e.g., add headers)
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiService.interceptors.response.use(
  (response: any) => {
    // You can modify the response data here
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default apiService;
