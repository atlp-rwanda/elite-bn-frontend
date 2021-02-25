import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../components/Dashboard/pages/DashBoard';
import Home from '../components/Home';
import Auth from '../containers/Auth/Auth';
import login from '../components/Login';
import locations from '../containers/Auth/Location';

function index() {
  return (
    <Switch>
      <Route path="/register" component={Auth} />
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={login} />

      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/location" component={locations} />
    </Switch>
  );
}

export default index;
