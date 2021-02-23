import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SingleProfile from '../components/Dashboard/pages/SingleProfile';
import UpdateProfile from '../components/Dashboard/pages/UpdateProfile';
import Home from '../components/Home';
import Auth from '../containers/Auth/Auth';
import login from '../components/Login';
import createAccomodation from '../components/Dashboard/Accomodation/createAccomodation';
import viewAccomodation from '../components/Dashboard/Accomodation/viewAccomodation';

function index() {
  return (
    <Switch>
      <Route path="/register" component={Auth} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard/profile/" component={SingleProfile} />
      <Route exact path="/login" component={login} />
      <Route exact path="/dashboard/profile/update/" component={UpdateProfile} />
      <Route exact path="/dashboard/Accomodation/createAccomodation/" component={createAccomodation} />
      <Route exact path="/dashboard/Accomodation/viewAccomodation/" component={viewAccomodation} />
    </Switch>
  );
}

export default index;
