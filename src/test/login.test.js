import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Login from '../components/Login';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import store from '../store'
import { BrowserRouter } from 'react-router-dom'

configure({ adapter: new Adapter() });

describe('test case for login ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <BrowserRouter> <Login /></BrowserRouter>
    </Provider>);
  });

  

  test('login check with wrong data', () => {
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'eric@example.com' } });

    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'samplepassword123' } });
    wrapper.find('form').simulate('submit');
  })


  test('login check with right data', () => {
    wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'eric74@example.com' } });

    wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'samplepassword' } });
    wrapper.find('form').simulate('submit');
  })

})


