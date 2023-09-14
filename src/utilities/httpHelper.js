import axios from 'axios';

export const get = async (url, params) => await axios.get(url, {
    params: {
        t: new Date().getTime(),
        ...params,
    },
});

export const post = async (url, params) => await axios.request({
    url: url,
    method: 'POST',
    data: params,
});

export const getWithToken = async (url, params, token) => await axios.get(url, {
    headers: {
        token,
    },
    params: {
        t: new Date().getTime(),
        ...params,
    },
});