/* eslint-disable import/no-named-as-default */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DashBoard from '../components/Dashboard/pages/DashBoard'
import SingleProfile from '../components/Dashboard/pages/SingleProfile'
import UpdateProfile from '../components/Dashboard/pages/UpdateProfile'
import Home from '../components/Home'
import Auth from '../containers/Auth/Auth'
import login from '../components/Login'
import ResetPassword from '../components/ResetPassword/ResetPassword'
import BookAccommodation from '../components/Dashboard/pages/BookAcc'

function index() {
  return (
    <Switch>
      <Route path="/register" component={Auth} />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard/profile/" component={SingleProfile} />
      <Route exact path="/accommodation/book" component={BookAccommodation} />
      <Route exact path="/login" component={login} />

      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <Route
        exact
        path="/dashboard/profile/update/"
        component={UpdateProfile}
      />
      <Route exact path="/reset-password" component={ResetPassword} />
    </Switch>
  )
}

export default index
