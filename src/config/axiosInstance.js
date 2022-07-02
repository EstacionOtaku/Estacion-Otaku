import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://${process.env.REACT_APP_BASE_API_URL}`,
});

export default axiosInstance;
