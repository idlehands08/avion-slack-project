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
    channels: () => {
        const options = {
            method: 'GET',
            url: '/api/v1/channels',
        };
    
        return API.request(options);
    },
    recentMessages: () => {
        const options = {
            method: 'GET',
            url: '/api/v1/users/recent',
        }

        return API.request(options);
    },
    allUsers: () => {
        const options = {
            method: 'GET',
            url: '/api/v1/users',
        }

        return API.request(options);
    }
};

export default UserApi;
