import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Counter from '../containers/Counter/Counter';
import Login from '../components/Login';
import Navbar from '../components/Navbar';

function index() {
  return (
    <Switch>
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/navbar" component={Navbar} /> 
    </Switch>
  );
}

export default index;
