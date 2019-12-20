import axios from 'axios';

const REQUEST_QUIET_HEADER_NAME = 'Markman_Quiet_Request';

axios.interceptors.response.use(
    function (res) {
        if (!res.data.success) {
            const isQuiet = res.config.headers[REQUEST_QUIET_HEADER_NAME];
            handleErrorResponse(res.data.msg, isQuiet);
            if (isQuiet) {
                return res;
            }
            return;
        }
        return res.data;
    },
    function (err) {
        handleErrorResponse(err.response.data.message, err.config.headers[REQUEST_QUIET_HEADER_NAME]);
        return Promise.reject(err);
    }
);

export function handleErrorResponse(msg, isQuiet) {
    if (!isQuiet) {
        alert(msg);
    }
    throw msg;
}

export function sendGetRequest(url, query, isQuiet = false) {
    let options;
    if (isQuiet) {
        options = {
            headers: {
                [REQUEST_QUIET_HEADER_NAME]: isQuiet
            }
        };
    }
    return axios
        .get(
            `${url}?${Object.keys(query).map(k => (k + '=' + query[k])).join('&')}`,
            options
        )
        .then(response => response.data);
}

export function sendPostRequest(url, data, isQuiet = false) {
    let options;
    if (isQuiet) {
        options = {
            headers: {
                [REQUEST_QUIET_HEADER_NAME]: isQuiet
            }
        };
    }
    return axios.post(url, data, options).
        then(response => response.data);
}
