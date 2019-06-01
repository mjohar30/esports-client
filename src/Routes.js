import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Profile from './views/Profile'
import ProfileTeam from './views/ProfileTeam'
import Register from './views/Register'
import RegisterTeam from './views/RegisterTeam'
import Login from './views/Login'

const Routes = () => {
    return (
        <Switch>
            <Route exact path ="" exact component={Register} />
            <Route exact path ="/#/profile" component={Profile} />
            <Route path ="/profileTeam" exact component={ProfileTeam} />
            <Route path ="//register" exact component={Register} />
            <Route path ="#/registerTeam" exact component={RegisterTeam} />
            <Route path ="#//login" exact component={Login} />
        </Switch>
    )
}

export default Routes;