import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import rootReducer from '../../store';

import ResetPassword from '../../components/ResetPassword/ResetPassword';
import HomeNavComponent from '../../components/';
import FooterOne from '../../components/auth/resetPassword/FooterOne';

// Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store1 = mockStore({});

let mainState; let props; let testStore; let
  setUp;
beforeEach(() => {
  const middlewares = [thunk];
  mainState = {
    email: '',
    token: null,
    error: null,
    loading: false,
    message: null,
  };

  props = {
    email: '',
    token: null,
    error: null,
    loading: false,
    message: null,
    resetPassword: jest.fn(),
  };

  testStore = (state) => {
    const createStoreWithMiddleware = () => { applyMiddleware(...middlewares)(createStore); };
    return createStoreWithMiddleware(rootReducer, state);
  };

  const store = mockStore({});
  const wrapper = shallow(
    <Provider store={store}>
      <ResetPassword />
    </Provider>,
  );
});
describe('ResetPassword page Components', () => {
  it('Homenav should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store1}>
          <ResetPassword />
        </Provider>,
      ).contains(<HomeNavComponent />),
    );
  });
  it('Footer should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store1}>
          <ResetPassword />
        </Provider>,
      ).contains(<FooterOne />),
    );
  });
  it('Should submit valid forgot password form Successfully', () => {
    const store = mockStore({});
    const wrapper = shallow(
      <Provider store={store}>
        <ResetPassword />
      </Provider>,
    );
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    // const forgotPasswordSpy = jest.spyOn(component.instance().props, 'forgotPassword');
    const email = { target: { name: 'email', value: 'pextech@email.com' } };

    wrapper.find('[type="email"]').simulate('change', email);
    wrapper.find('[type="submit"]').simulate('click');
    wrapper.find('LayoutForms').simulate('submit', {
      preventDefault() {},
      target: { checkValidity: () => true },
    });
    expect(handleSubmitSpy).toHaveBeenCalled();
    // eslint-disable-next-line max-len
    // expect(component.state()).toEqual({ checkError: 'was-validated', email: 'example@email.com' });
    // expect(forgotPasswordSpy).toHaveBeenCalled();
  });
});
