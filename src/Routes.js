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
            <Route path ="/" component={Landing} />
            <Route path ="profile" component={Profile} />
            <Route path ="/profileTeam" component={ProfileTeam} />
            <Route path ="/register" component={Register} />
            <Route path ="/registerTeam" component={RegisterTeam} />
            <Route path ="/login" component={Login} />
            
        </Switch>
    )
}

export default Routes;