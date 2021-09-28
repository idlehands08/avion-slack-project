import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// components
import App from '../App';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Shared from '../pages/Shared/Shared';
import Messages from '../pages/Messages/Messages';

import AuthRoute from './middleware/auth.route';
import UserRoutes from './middleware/user.route';

const routes = () => {
    return (
        <Switch>
            <UserRoutes path="/temporary" exact component={App} />
            <UserRoutes path="/" exact component={Home} />
            <AuthRoute path="/login" exact component={Login} />
            <UserRoutes path='/messages/:id' exact component={Messages} />
            <UserRoutes path="/shared" exact component={Shared} />
        </Switch>
    );
}

export default withRouter(routes);
