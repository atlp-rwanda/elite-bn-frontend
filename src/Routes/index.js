import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/profile';

function index() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
}

export default index;
