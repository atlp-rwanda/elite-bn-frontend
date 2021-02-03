import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Auth from '../containers/Auth/Auth';
import Counter from '../containers/Counter/Counter';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

function index() {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/navbar" component={Navbar} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default index;
