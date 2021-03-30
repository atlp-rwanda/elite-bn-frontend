/* eslint-disable import/no-named-as-default */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DashBoard from '../components/Dashboard/pages/DashBoard'
import SingleProfile from '../components/Dashboard/pages/SingleProfile'
import UpdateProfile from '../components/Dashboard/pages/UpdateProfile'
import Home from '../components/Home'
import Auth from '../containers/Auth/Auth'
import Login from '../components/Login'
import ResetPassword from '../components/ResetPassword/ResetPassword'
import RolesAndPermissions from '../components/Dashboard/pages/RolesAndPermissions'
import AdminRoute from './adminRoute'
import AuthRoutes from './AuthRoutes'
import IsloggedIn from './Islogged'

function index() {
  return (
    <Switch>
      <AuthRoutes path="/register" component={Auth} />
      <Route exact path="/" component={Home} />
      <IsloggedIn exact path="/dashboard/profile/" component={SingleProfile} />
      <AuthRoutes exact path="/login" component={Login} />

      <IsloggedIn exact path="/dashboard" component={DashBoard} />
      <Route exact path="/reset-password" component={ResetPassword} />
      <IsloggedIn
        exact
        path="/dashboard/profile/update/"
        component={UpdateProfile}
      />
      <Route exact path="/reset-password" component={ResetPassword} />
      <IsloggedIn exact path="/roles-permissions" component={RolesAndPermissions}></IsloggedIn>
      <AdminRoute exact path="/roles-permissions" component={RolesAndPermissions} />
    </Switch>
  )
}

export default index
