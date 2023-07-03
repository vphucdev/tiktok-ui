import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

httpRequest.interceptors.response.use((response) => {
    return response.data;
});
// cach khac
// export const get = async (path, options = {}) => {
//     const response = await request.get(path, options);
//     return response.data;
// };

export default httpRequest;
