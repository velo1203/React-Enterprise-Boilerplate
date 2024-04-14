import axios from "axios";
// Axios 인스턴스 생성
const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
