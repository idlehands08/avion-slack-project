import API from './base';

const MessageApi = {
    send:(payload, headers) => {
        const options = {
            method: 'POST',
            url: '/api/v1/messages',
            data: payload,
            headers: headers
        };

        return API.request(options);
    },
    retrieve: (headers, params) => {
        const options = {
            method: 'GET',
            url: `http://206.189.91.54//api/v1/messages${params}`,
            headers: headers
        };

        return API.request(options);
    }

}

export default MessageApi;