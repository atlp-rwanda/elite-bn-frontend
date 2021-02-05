import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserEdit } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import { IoLogOutOutline } from 'react-icons/io5';
import profile from '../../assets/profile.png';

export const NavBar = ({ Logout }) => {
  const [dropDown, setDropDown] = useState(false);

  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
    });
  }, []);

  return (
    <header className="flex justify-between h-16 align-center shadow-2xl items-center font-mainFont relative  bg-white ">
      <div className="logo  justify-between w-1/4 mr-5 ">
        {size < 760 ? (
          <h1 className="relative  text-center z-20  text-3xl text-white bottom-1">
            B>
            <div className=" w-1/2 text-center bg-white absolute h-0.5 z-20 left-1/4 top-9 " />
          </h1>
        ) : (
          <h1 className="relative text-2xl md:text-1xl  text-center z-20  text-white  bottom-1">
            Barefoot nomad
            <div className="line w-8/12 left-9  right-2/4 text-center bg-white absolute h-0.5 z-20 top-8 " />
          </h1>
        )}
      </div>
      <nav className="flex  w-full justify-between ">
        <div className="cursor-pointer">
          <Link to="/">Home</Link>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-row w-2/4 ">
            <div className="notification mr-7">
              <FaBell className="text-lg" />
            </div>
            <div className="profile flex-row flex mr-7">
              <div className="flex-row flex relative">
                <img className="w-6 h-6 rounded-3xl  mr-1" src={profile} alt="Blank profile" />
                <span className="down text-sm mr-1 flex ">
                  Dev
                  <AiOutlineDown
                    onClick={() => setDropDown(!dropDown)}
                    className="text-xs ml-1 mt-1 cursor-pointer"
                  />
                </span>
                <div>
                  <div
                    className="dropdown flex bg-white  shadow-xl flex-col absolute right-14 top-12 "
                    style={{ display: dropDown ? 'flex' : 'none' }}
                  >
                    <div className="flex py-2 px-4  cursor-pointer hover:bg-gray-500 hover:text-white">
                      <div className="drop-item">
                        <FaUserEdit className="mt-1" />
                      </div>
                      <div className="drop-item">
                        <span className="text-xs ml-2"> Profile</span>
                      </div>
                    </div>
                    <div
                      className=" logout flex py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white "
                      onClick={Logout}
                    >
                      <div className="drop-item">
                        <IoLogOutOutline className="mt-1" />
                      </div>
                      <div className="drop-item">
                        <span className="text-xs ml-2 cursor-pointer">Logout</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-4 ">
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
  );
};

export default NavBar;
