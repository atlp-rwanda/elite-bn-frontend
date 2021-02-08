import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import store from '../store';
import Index from '../components/Home';

describe('rendering components', () => {
  xit('renders app components', () => {
    shallow(<App />);
  });
  xit('renders header', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <App />
        </BrowserRouter>
      </Provider>
    );
    const div = (
      <div className="text-center">
        <h2 className="m-6">
          Welcome to Our Very beginning of this Barefoot Front-end Implementation
        </h2>
      </div>
    );
    const header = (
      <h2 className="m-6">
        Welcome to Our Very beginning of this Barefoot Front-end Implementation
      </h2>
    );
    expect(wrapper.contains(header)).toEqual(false);
  });
});
