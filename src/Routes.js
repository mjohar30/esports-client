import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Profile from './views/Profile'
import ProfileTeam from './views/ProfileTeam'
import Register from './views/Register'
import RegisterTeam from './views/RegisterTeam'

const Routes = () => {
    return (
        <Switch>
            <Route exact path ="/" component={Landing} />
            <Route exact path ="/profile" component={Profile} />
            <Route exact path ="/profileTeam" component={ProfileTeam} />
            <Route exact path ="/register" component={Register} />
            <Route exact path ="/registerTeam" component={RegisterTeam} />
        </Switch>
    )
}

export default Routes;