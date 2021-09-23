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
    // login: (payload) => {
    //     const options = {
    //         method: 'POST',
    //         url: '/api/v1/auth/sign_in',
    //         data: payload,
    //     };

    //     return API.request(options);
    // },

};

export default UserApi;
