import API from './base';

const MessageApi = {
    send:(payload) => {
        const options = {
            method: 'POST',
            url: '/api/v1/messages',
            data: payload,
        };

        return API.request(options);
    },
    retrieve: (params) => {
        const options = {
            method: 'GET',
            url: `/api/v1/messages?${params}`,
        };

        return API.request(options);
    }

}

export default MessageApi;