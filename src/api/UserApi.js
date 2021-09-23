import API from './base';

const UserApi = {
    register: (payload) => {
        const options = {
            method: 'POST',
            url: '/api/v1/auth',
            data: payload,
        };

        return API.request(options);
    },
    channels: (headers) => {
        const options = {
            method: 'GET',
            url: '/api/v1/channels',
            headers: headers 
        };
    
        return API.request(options);
    },
};

export default UserApi;
