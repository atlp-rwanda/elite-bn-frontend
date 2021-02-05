import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Profile from '../components/profile';

configure({ adapter: new Adapter() });

describe('rendering components', () => {
  it('renders the profile link which is  blank', () => {
    const { getByText } = render(<Profile />);
    const linkElement = getByText('profilelink which is blank');
    expect(linkElement).toBeTruthy();
  });
});
