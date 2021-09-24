import API from '../api/base';
import Cookies from 'js-cookie'

const AuthApi = () => {

    const isAuthenticated = () => {
        return Cookies.get('access-token') ? true : false;
    }

    const authenticate = (email, password, callback) => {
        API.post('/api/v1/auth/sign_in', {
            'email': email,
            'password': password

        }).then(({ data, headers }) => {
            // set cookies here
            if (data) {
                // window.location = '/';
                Cookies.set('access-token', headers['access-token'])
                Cookies.set('client', headers['client'])
                Cookies.set('uid', headers['uid'])
                Cookies.set('expiry', headers['expiry'])
            }
        }).catch(err => {
            return console.log(err)
        }).finally(() => {
            callback();
        })
    }

    //logout will remove cookies and redirect user back to the login page
    const logout = () => {
       Cookies.remove('access-token');
       Cookies.remove('client');
       Cookies.remove('uid');
       Cookies.remove('expiry');
   }

    return {
        isAuthenticated,
        authenticate,
        logout
    }
}

export default AuthApi();
