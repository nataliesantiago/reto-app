import React from 'react';
import { Route, Router } from 'react-router-dom';

import history from '../history';

import Header from './shared/Header';
import Home from './Home';
import ListUsers from './user/ListUsers';
import CreateUser from './user/CreateUser';

export const makeMainRoutes = () => {
    return(
        <Router history={history}>
            <Header/>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/lista-usuarios" component={ListUsers} />
                <Route exact path="/crear-usuario" component={CreateUser} />
            </div>
        </Router>
    );
}