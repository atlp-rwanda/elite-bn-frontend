/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import { IoLogOutOutline } from 'react-icons/io5';

const NavBar = ({ userData }) => {
  const [dropDown, setDropDown] = useState(false);
  const { firstName, profilePicture } = userData;
  return (
    <div className="col-span-full  w-full  col-start-3  col-end-14 shadow-xl  ">
      <header className="flex justify-between h-16 align-center items-center font-mainFont relative   ">
        <nav className="flex  w-full justify-between ">
          <div className="cursor-pointer">
            <Link to="/" className="pl-1 md:pl-8">
              Home
            </Link>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row w-2/4 ">
              <div className="profile flex-row flex mr-2 md:mr-7">
                <div className="flex-row flex relative">
                  <img
                    className="w-6 h-6 rounded-3xl  mr-1"
                    src={
                      profilePicture ||
                      'https://res.cloudinary.com/nrob/image/upload/v1613451239/npc5d5r9g0nyyihppqxd.png'
                    }
                    alt="profile"
                  />
                  <span className="down text-sm mr-1 flex ">
                    {firstName}

                    <AiOutlineDown
                      onClick={() => setDropDown(!dropDown)}
                      className="text-xs ml-1 mt-1 cursor-pointer"
                    />
                  </span>
                  <div>
                    <div
                      className="dropdown flex bg-white  shadow-xl flex-col absolute right-14 z-30 top-12 "
                      style={{ display: dropDown ? 'flex' : 'none' }}
                    >
                      <div className="flex py-2 px-4  cursor-pointer hover:bg-gray-500 hover:text-white">
                        <div className="drop-item">
                          <FaUserEdit className="mt-1" />
                        </div>
                        <div className="drop-item">
                          <Link to="/dashboard/profile/">
                            <span className="text-xs ml-2"> Profile</span>
                          </Link>
                        </div>
                      </div>
                      <div className="logout flex py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white ">
                        <div className="drop-item">
                          <IoLogOutOutline className="mt-1" />
                        </div>
                        <div className="drop-item">
                          <span className="text-xs ml-2 cursor-pointer">Logout</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex ml-2 md:ml-4 ">
                      <span>
                        <FiGlobe className=" text-lg" />
                      </span>
                      <span className="flex text-sm mx-1 ">English</span>
                      <span>
                        <AiOutlineDown className=" text-lg cursor-pointer pt-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
