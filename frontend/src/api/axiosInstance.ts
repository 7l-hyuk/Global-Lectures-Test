import axios from "axios";

const API_URL = "http://localhost:8000/api/users";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // 쿠키 자동 포함
});

export default axiosInstance;
