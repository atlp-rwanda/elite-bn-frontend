/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import TravelContainer from '../Travel/TravelContainer';
import Main from '../Main';

const Content = () => (
  <div className="col-start-3  bg-gray-100  row-start-2  col-end-13  md:p-12 min-h-screen">
    <Route exact path="/dashboard/travels" component={TravelContainer} />
    <Route exact path="/dashboard" component={Main} />
  </div>
);

export default Content;
