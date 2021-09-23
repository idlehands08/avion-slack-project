import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// components
import App from '../App';
import Login from '../pages/Login/Login';
import Shared from '../pages/Shared/Shared';

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/login" exact component={Login} />
            <Route path="/shared" exact component={Shared} />
        </Switch>
    );
}

export default withRouter(routes);
