import API from './base';

const UserApi = {
    register: (payload) => {
        const options = {
            method: 'POST',
            url: '/auth',
            data: payload,
        };

        return API.request(options);
    },
    login: (payload) => {
        const options = {
            method: 'POST',
            url: '/auth/sign_in',
            data: payload,
        };

        return API.request(options);
    }
};

export default UserApi;
