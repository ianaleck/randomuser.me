import axios from "axios";
let headers = {};
// change the baseURL to random API url
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API || "https://randomuser.me/api/",
  headers,
});

export default axiosInstance;
