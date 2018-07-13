import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginForm from '../containers/login_form_container';
import RegisterForm from '../containers/register_form_container';
import AdminPanel from '../containers/admin_panel_container';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            <Route path="/admin_panel" component={AdminPanel} />
        </Switch>
    </BrowserRouter>
)