import axios from "axios";

const token = JSON.parse(localStorage.getItem("token")) 
const accessToken = token !== null ? token.accessToken : '';
const setAccessToken = () => {

}
const axiosInstance = axios.create({
    baseURL: "https://economic.onrender.com/api/v1/",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

export default axiosInstance;