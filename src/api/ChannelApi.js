import API from './base';

const ChannelApi = {
    create: (payload, headers) => {
        const options = {
            method: 'POST',
            url: '/api/v1/channels',
            data: payload,
            headers: headers
        };

        return API.request(options);
    }
};

export default ChannelApi;
