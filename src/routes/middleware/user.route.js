import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from '../../shared/Sidebar/Sidebar';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';

import AuthApi from '../../services/AuthApi';

function UserRoutes ({ component: Component, ...rest }) {
    return (
        <div>
            { AuthApi.isAuthenticated() && <Header /> }
            <div className="d-flex">
                { AuthApi.isAuthenticated() && <Sidebar /> }
                <Route
                    {...rest}
                    render={(props) => {
                        if (AuthApi.isAuthenticated()) {
                            return <Component {...props} />;
                        } else {
                            return <Redirect to={
                                {
                                    pathname: '/login',
                                    state: {
                                        from: props.location
                                    }
                                }
                            } />;
                        }
                    }}
                />
                    <div>
                        <Footer text= "Disclaimer: This app is for educational purposes only."/>
                </div>
            </div>
        </div>
       
    )
}

export default UserRoutes;
