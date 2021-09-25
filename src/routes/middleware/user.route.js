import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../../shared/Sidebar/Sidebar';
import Header from '../../shared/Header/Header';

function UserRoutes ({ component: Component, ...rest }) {
    return (
        <div className="d-flex flex-column">
            <Header />
            <div className="d-flex">
                <Sidebar />
                <Route
                    {...rest}
                    render={ props => <Component {...props} /> }
                />
            </div>
        </div>
    )
}

export default UserRoutes;
