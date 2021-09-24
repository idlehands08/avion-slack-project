import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../../shared/Sidebar/Sidebar';

function UserRoutes ({ component: Component, ...rest }) {
    return (
        <div className="d-flex">
            <Sidebar />
            <Route
                {...rest}
                render={ props => <Component {...props} /> }
            />
        </div>
    )
}

export default UserRoutes;
