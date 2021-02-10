import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SingleProfile from '../components/Dashboard/pages/SingleProfile';
import UpdateProfile from '../components/Dashboard/pages/UpdateProfile';
import Home from '../components/Home';
import Auth from '../containers/Auth/Auth';
import login from '../components/Login';

function index() {
  return (
    <Switch>
      <Route path="/register" component={Auth} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard/profile/" component={SingleProfile} />
      <Route exact path="/login" component={login} />
      <Route exact path="/dashboard/profile/update/" component={UpdateProfile} />
    </Switch>
  );
}

export default index;
