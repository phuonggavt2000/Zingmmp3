import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_SEVER_URL,
});

export const get = async (path, params = {}) => {
    const res = await httpRequest.get(path, params);
    return res;
};

export default httpRequest;
