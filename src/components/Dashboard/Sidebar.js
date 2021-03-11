/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { AiFillCaretDown, AiOutlineCaretRight, AiOutlineRight } from 'react-icons/ai';
import { FaTimesCircle, FaUserShield } from 'react-icons/fa';
import { RiUserSearchFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { BsHouseFill } from 'react-icons/bs'
import { MdCreateNewFolder } from 'react-icons/Md'
import { MdAddLocation } from 'react-icons/Md'
import { RiHome2Line } from 'react-icons/Ri'


const SideBar = () => {
  const [down1, setDown1] = useState(false);
  const [down2, setDown2] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [sideBar2, setSideBar2] = useState(false);
  return (
    <>
      <div
        className={`bg-blue-700 text-white  ${sideBar ? '' : ''
          }     transition duration-1000 ease-in-out z-30 col-start-1 col-end-3  row-start-1 h-screen  border-white row-end-7 mb-0`}
      >
        <div className="logo text-white text-xl text-center pt-1 font-bold">
          <h1 className={`${sideBar ? 'block' : 'hidden'}   lg:block`}>
            <span>Barefoot-Nomad</span>
            <div className="h-0.5 my-1 bg-white w-4/5 text-center m-auto" />
          </h1>
          <h1 className={`${sideBar ? 'hidden' : 'block'} text-3xl text-center  lg:hidden`}>
            <span className="flex justify-center mb-2 items-center">
              <span> B</span>
              <AiOutlineRight
                onClick={() => setSideBar(!sideBar)}
                className=" open cursor-pointer mt-1"
              />
            </span>

            <div className="h-0.5  bg-white w-7/12 text-center m-auto  " />
          </h1>
        </div>

        <div className="h-px my-5 w-full   text-center " />

        <section className="flex  flex-col items-center">
          <article className="flex  w-full items-center flex-col ">
            <div
              className={`flex ${down1 ? 'bg-blue-900' : 'bg-blue-700'
                }    w-full py-2 justify-around md:justify-between px-4 border-b border-blue-800 `}
            >
              <h1 className="flex">
                <FaUserShield className="mt-1 mr-1" />
                <span className={`${sideBar ? 'block' : 'hidden'}  lg:block`}>Users</span>
              </h1>
              {down1 ? (
                <AiFillCaretDown
                  className="cursor-pointer mt-1.5 text-sm "
                  onClick={() => setDown1(!down1)}
                />
              ) : (
                <AiOutlineCaretRight
                  className="cursor-pointer  mt-1.5  md:text-sm  "
                  onClick={() => setDown1(!down1)}
                />
              )}
            </div>
            <ul
              className={`${down1 ? 'flex bg-blue-900' : 'hidden bg-blue-700'
                }  py-3  items-center w-full flex-col `}
            >
              <li className="flex transition duration-500 ease-in-out  ml-8 py-1  transform hover:translate-x-3 hover:scale-110  w-full ">
                <RiUserSearchFill className="ml-1 mt-0.5" />
                <Link to="/dashboard/profile/">
                  <span className={`${sideBar ? 'block' : 'hidden'}  text-sm ml-2 md:block`}>
                    User profile
                  </span>
                </Link>
              </li>
            </ul>
          </article>
        </section>

        {/* start accomodations */}
        <section className="flex  flex-col items-center">
          <article className="flex  w-full items-center flex-col ">
            <div
              className={`flex ${down2 ? 'bg-blue-900' : 'bg-blue-700'
                }    w-full py-2 justify-around md:justify-between px-4 border-b border-blue-800 `}
            >
              <h1 className="flex">
                <BsHouseFill className="mt-1 mr-1" />
                <span className={`${sideBar ? 'block' : 'hidden'}  lg:block`}>Accomodations</span>
              </h1>
              {down1 ? (
                <AiFillCaretDown
                  className="cursor-pointer mt-1.5 text-sm "
                  onClick={() => setDown2(!down2)}
                />
              ) : (
                <AiOutlineCaretRight
                  className="cursor-pointer  mt-1.5  md:text-sm  "
                  onClick={() => setDown2(!down2)}
                />
              )}
            </div>
            <ul
              className={`${down2 ? 'flex bg-blue-900' : 'hidden bg-blue-700'
                }  py-3  items-center w-full flex-col `}
            >

              <li className="flex transition duration-500 ease-in-out  ml-8 py-1  transform hover:translate-x-3 hover:scale-110  w-full ">
                <MdAddLocation className="ml-1 mt-0.5" />
                <Link to="/dashboard/Accomodation/Location/">

                  <span className={`${sideBar ? 'block' : 'hidden'}  text-sm ml-2 md:block`}>
                    Locations
                  </span>
                </Link>
              </li>
              <li className="flex transition duration-500 ease-in-out  ml-8 py-1  transform hover:translate-x-3 hover:scale-110  w-full ">
                <MdCreateNewFolder className="ml-1 mt-0.5" />
                <Link to="/dashboard/Accomodation/ManageAccomodation/">

                  <span className={`${sideBar ? 'block' : 'hidden'}  text-sm ml-2 md:block`}>
                    Create Accomodations
                  </span>
                </Link>
              </li>

              <li className="flex transition duration-500 ease-in-out  ml-8 py-1  transform hover:translate-x-3 hover:scale-110  w-full ">
                <RiHome2Line className="ml-1 mt-0.5" />
                <Link to="/dashboard/Accomodation/AllAccomodation/">
                  <span className={`${sideBar ? 'block' : 'hidden'}  text-sm ml-2 md:block`}>
                    All Accomodations
                  </span>
                </Link>
              </li>

            </ul>
          </article>
        </section>
        {/* ends accomodation */}


      </div>
      <span
        className={`${sideBar2 ? 'block' : 'hidden'
          } z-30 absolute right-0 close  bg-white text-blue-600 text-3xl cursor-pointer`}
        onClick={() => setSideBar2(!sideBar2)}
      >
        <FaTimesCircle />
      </span>
    </>
  );
};

export default SideBar;
