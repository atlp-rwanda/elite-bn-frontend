import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../components/Dashboard/NavBar';
import SideBar from '../../components/Dashboard/SideBar';
import { Dashboard } from '../../components/Dashboard';

describe('Test nav in dashboard', () => {
  let navWrapper;
  beforeEach(() => {
    navWrapper = shallow(<NavBar />);
  });
  test('Test dropDown logout', () => {
    expect(navWrapper.length).toBe(1);
  });
  test('Test dropDown', () => {
    navWrapper.find('.down').simulate('click');
  });
  test('Test dropDown logout', () => {
    navWrapper.find('.logout').simulate('click');
  });
});
describe('Test sidebar in dashboard', () => {
  test('Test sidebar', () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper.length).toBe(1);
  });
});

describe('Test  dashboard component', () => {
  let DashboardWrapper;
  beforeEach(() => {
    DashboardWrapper = shallow(<Dashboard />);
  });
  test('Test dashboard', () => {
    test('Dashboard Test map state to props', () => {
      console.log(DashboardWrapper.dive());
    });
  });
});
