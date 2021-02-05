
import axios from 'axios/dist/axios';
const axiosConfig=axios.create({
    baseURL:'http://localhost:5000/api/v1'
})
export default axiosConfig