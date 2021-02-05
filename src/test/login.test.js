import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import Login from '../components/Login';
import store from '../store/index';

configure({ adapter: new Adapter() });

describe('TEST LOGIN COMPONENT', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      {' '}
      <Login />
      {' '}
                    </Provider>);
  });
  it('should not submit empty form', () => {
    wrapper.find('#submit-button').simulate('click');
    expect(wrapper.find('#Emailerror').text()).toEqual('Email is required');
    expect(wrapper.find('#Password').text()).toBe('Password is required');
  });
});
