import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

request.interceptors.response.use((response) => {
    return response.data;
});
// cach khac
// export const get = async (path, options = {}) => {
//     const response = await request.get(path, options);
//     return response.data;
// };

export default request;
