import API from './base';

const ChannelApi = {
    create: (payload) => {
        const options = {
            method: 'POST',
            url: '/api/v1/channels',
            data: payload,
        };


        return API.request(options);
    },
    details: (id) => {
        const options = {
            method: 'GET',
            url: `/api/v1/channels/${id}`,
        }
        return API.request(options);
    },
    members: (payload) => { 
        const options = {
            method: 'POST',
            url: '/api/v1/channels',
            data:payload,
        }
        return API.request(options);
    },


};

export default ChannelApi;
