import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { AiFillLike, AiOutlineLogout, AiTwotoneStar } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md';
import Profile from '../../components/Dashboard/Profile';
import store from '../../store';

import NavBar from '../../components/Dashboard/NavBar';
import SideBar from '../../components/Dashboard/Sidebar';
import Footer from '../../components/Dashboard/Footer';
import Pagination from '../../components/Dashboard/Pagination';

describe('Test user profile info', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <Profile />
        </BrowserRouter>
      </Provider>
    );
  });
  test('test length', () => {
    expect(wrapper.length).toBe(1);
  });
});

describe('Test navbar ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <NavBar />
        </BrowserRouter>
      </Provider>
    );
  });
  test('Test dropdown button', () => {
    expect(wrapper.length).toBe(1);
  });
  test('Test dropdown button', () => {
    wrapper.find('.down').simulate('click');
  });
  test('Test dropdown button', () => {
    expect(
      wrapper.contains(
        <div className="cursor-pointer">
          <Link to="/" className="pl-1 md:pl-8">
            Home
          </Link>
        </div>
      )
    ).toEqual(false);
  });
});

describe('Test sidebar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SideBar />);
  });

  test('test content component', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Close sidebar (decrease sidebar width)', () => {
    wrapper.find('.close').simulate('click');
  });
  test('Increase side bar on small screen sidebar ', () => {
    wrapper.find('.open').simulate('click');
  });
});

describe('Test  footer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test('test content component', () => {
    expect(wrapper.length).toBe(1);
  });

  test('Increase side bar on small screen sidebar ', () => {
    expect(
      wrapper.contains(
        <div className="col-span-full bg-white  shadow-2xl col-start-3 col-end-13  flex-col h-full  w-full flex p-4 ">
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-2">
            <div className="flex flex-col">
              <h2 className="flex cursor-pointer">
                <AiOutlineLogout className="mt-1 text-blue-600" />
                Logout
              </h2>
            </div>
            <div className="flex flex-col">
              <h2 className="flex">
                {' '}
                <MdModeComment className="text-blue-600 mt-1  text-xl" />
                200
              </h2>
              <span className="text-xs text-gray-600 ">Comments trips</span>
            </div>
            <div className="flex flex-col">
              <h2 className="flex">
                <AiFillLike className="text-blue-600 mt-0 text-xl" />
                150
              </h2>
              <span className="text-xs text-gray-600 ">Likes accommodation</span>
            </div>
            <div className="flex flex-col">
              <h2 className="flex">
                <AiTwotoneStar className="text-yellow-500  mt-1 text-lg" />
                300
              </h2>
              <span className="text-xs text-gray-600 ">Rate accommodation</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 items-end gap-2 mt-2  text-gray-500 h-full">
            <div />
            <div className="text-sm">&copy; Barefoot nomad all right reserved </div>
            <div className="text-sm pl-3">
              <Link to="/dashboard/profile">Privacy</Link>
            </div>
            <div className="text-sm">
              <Link to="/dashboard/profile"> Terms and services</Link>
            </div>
          </div>
        </div>
      )
    ).toEqual(true);
  });
});

describe('Test Pagination component', () => {
  test('should test pagination components', () => {
    let pages = shallow(<Pagination />);

    expect(
      pages.contains(
        <>
          <div className="pagination flex mt-8  items-center justify-center ">
            <div className="border-gray-300 border p-2  ml-1 hover:bg-blue-600 hover:text-white rounded-sm py-1 hover:border-blue-600 transition">
              <a href="#g">Next</a>
            </div>
            <div className="border-gray-300 border p-2  ml-1 hover:bg-blue-600 hover:text-white rounded-sm py-1 hover:border-blue-600 transition">
              <a href="#e"> Previous</a>
            </div>
          </div>
        </>
      )
    ).toEqual(true);
  });
});
