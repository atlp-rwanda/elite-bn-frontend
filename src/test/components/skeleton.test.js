import { shallow } from 'enzyme';
import React from 'react';
import ProfileSkeletons from '../../skeletons/Profile/ProfileSkeleton';
import UpdateFormSkeleton from '../../skeletons/Profile/UpdateFormSkeleton';

describe('Test profile skeleton', () => {
  const ProfileSkeleton = shallow(<ProfileSkeletons />);
  const FormSkeleton = shallow(<UpdateFormSkeleton />);
  test('should test user profile skeleton', () => {
    expect(ProfileSkeleton.length).toBe(1);
  });
  test('should test user skeletons', () => {
    expect(FormSkeleton.length).toBe(1);
  });
});
