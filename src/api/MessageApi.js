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
    retrieve: (params, headers) => {
        const options = {
            method: 'GET',
            url: `/api/v1/messages?${params}`,
            headers: headers
        };

        return API.request(options);
    }

}

export default MessageApi;