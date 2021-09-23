import API from '../api/base';

const AuthApi = () => {
    const isAuthenticated = () => {
        // get cookies if exist
        return true; // default
    }

    const authenticate = (email, password, callback) => {
        API.post('/api/v1/auth/sign_in', {
            'email': email,
            'password': password
        }).then(({ data }) => {
            // set cookies here
            if (data) {
                window.location = '/';
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            callback();
        })
    }

    const logout = () => {
        // remove access token and redirect to /login
    }

    return {
        isAuthenticated,
        authenticate,
        logout
    }
}

export default AuthApi();
