import React from 'react';
import { Switch, withRouter } from 'react-router-dom';

// components
import App from '../App';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Shared from '../pages/Shared/Shared';
import Messages from '../pages/Messages/Messages';
import Registration from '../pages/Registration/Registration';
import ComposeMessage from '../pages/ComposeMessage/ComposeMessage';

import AuthRoute from './middleware/auth.route';
import UserRoutes from './middleware/user.route';

const routes = () => {
    return (
        <Switch>
            <UserRoutes path="/temporary" exact component={App} />
            <UserRoutes path="/" exact component={Home} />
            <AuthRoute path="/login" exact component={Login} />
            <AuthRoute path="/signup" exact component={Registration}/>
            <UserRoutes path='/messages/:receiverId' exact component={Messages} />
            <UserRoutes path="/shared" exact component={Shared} />
            <UserRoutes path="/compose" exact component={ComposeMessage} />
        </Switch>
    );
}

export default withRouter(routes);
