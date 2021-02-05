import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import login from '../components/Login';

function index() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={login} />
    </Switch>
  );
}

export default index;
