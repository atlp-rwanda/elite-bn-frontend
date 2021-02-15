import React from 'react';
import Enzyme from 'enzyme';
import { fireEvent, render, waitFor, cleanup, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import MutationObserver from 'mutation-observer';
import { Provider } from 'react-redux';
import Login from '../../src/components/Login';
import store from '../store/index';
global.MutationObserver = MutationObserver;
Enzyme.configure({ adapter: new Adapter() });
const mockRegister = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});
describe('Test <Login />', () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <Router>
            <Login handle={mockRegister} />
          </Router>
        </Provider>
      )
    );
    act(() => {
      jest.useFakeTimers();
      jest.advanceTimersByTime(1000);
    });
  });


  afterEach(cleanup);
  it('should contains form', () => {
    expect(screen.queryByTestId('form')).toBeTruthy();
  });

  it('should display required error when value is invalid', async () => {
    expect(screen.getAllByRole('button', { name: /Login/i })).toHaveLength(1);
    await act(async () => {
      await fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    });
    // expect(screen.getAllByRole('alert')).toHaveLength(4);
  });
  it('should handle continue with google', async () => {
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /Google/i }));
    });
  });
  it('should handle continue with facebook', async () => {
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /Facebook/i }));
    });
  });
  it('should submit the form', async () => {
    await act(async () => {
      fireEvent.submit();
    });
  });


});


