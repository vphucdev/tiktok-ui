import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
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
