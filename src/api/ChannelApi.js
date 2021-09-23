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
    },
    details: (id, headers) => {
        const options = {
            method: 'GET',
            url: `/api/v1/channels/${id}`,
            headers: headers
        }
        return API.request(options);
    },
    members: (payload, headers) => { 
        const options = {
            method: 'POST',
            url: '/api/v1/channels',
            data:payload,
            headers: headers
        }
        return API.request(options);
    },


};

export default ChannelApi;
