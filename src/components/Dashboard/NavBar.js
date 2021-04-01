/* eslint-disable */
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import { IoLogOutOutline } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import { BsBell } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';
import { GrUserSettings } from 'react-icons/gr';

const NavBar = ({ userData, LogoutAction, notifications }) => {
  const history = useHistory()
  const [dropDown, setDropDown] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loader, setLoader] = useState(true)
  const [notification, setNotification] = useState(false)
  const { firstName, profilePicture } = userData
  const logout = () => {
    toast.success('User logout successfully')
    LogoutAction()
    setTimeout(() => {
      history.push('/login')
    }, 3000)
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLoader(false)
    }, 5000)
  }, [])
  const notificationLoader = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }
  return (
      <div className="col-span-full  w-full  col-start-3  col-end-14 shadow-xl  ">
        <header className="flex justify-between h-16 align-center items-center font-mainFont relative   ">
          <nav className="flex  w-full justify-between ">
            <div className="cursor-pointer">
              <Link to="/" className="pl-1 md:pl-8">
                Home
              </Link>
            </div>
            <div className="flex flex-row ">
              <div className="flex flex-row w-2/4 ">
                <div className="profile flex-row flex mr-2 md:mr-7">
                  <div className="mr-4 relative">
                    <span className="absolute z-0 animate-pulse text-xs bg-blue-600 text-white rounded-full px-1 -top-2.5  -right-3">
                      {notifications.length}
                    </span>
                    <span
                      className="text-2xl z-20 cursor-pointer"
                      onClick={notificationLoader}
                    >
                      {' '}
                      <BsBell onClick={() => setNotification(!notification)} />
                    </span>
                    <div
                      className={`${
                        notification ? 'block' : 'hidden'
                      } bg-white border z-20 rounded-md   w-72 md:w-80 flex flex-col -left-16 md:-left-72 right-4 md:right-0 absolute top-10 shadow-md`}
                    >
                      <div className="w-full">
                        <span className="text-blue-600 font-bold  py-2 pt-4 px-2 ">
                          Notification
                        </span>
                      </div>
                      <div className="Single border-t my-2 max-h-60   overflow-y-auto py-2 grid gap-4 grid-cols-3 justify-items-center items-center justify-between px-2">
                        {notifications.map((notice) => {
                          return (
                            <>
                              <div className={`${loader ? 'hidden' : 'block'}`}>
                                <BiEnvelope className="text-center text-3xl " />
                              </div>
                              <div
                                className={`${
                                  loader ? 'block' : 'hidden'
                                } w-full text-center col-span-1`}
                              >
                                <Skeleton height={40} circle width={40} />
                              </div>
                              <div
                                className={`${
                                  loader ? 'hidden' : ' block'
                                } col-span-2  text-xs`}
                              >
                                {notice.message}
                              </div>
                              <div
                                className={`${
                                  loader ? 'block' : 'hidden'
                                } w-full col-span-2`}
                              >
                                <Skeleton height={15} />
                                <Skeleton height={15} />
                              </div>
                            </>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex-row flex relative">
                    <img
                      className={`${
                        loading ? 'hidden' : 'block'
                      } w-6 h-6 rounded-3xl  mr-1`}
                      src={
                        profilePicture ||
                        'https://res.cloudinary.com/nrob/image/upload/v1613451239/npc5d5r9g0nyyihppqxd.png'
                      }
                      alt="profile"
                    />
                    <span className={`${loading ? 'block' : 'hidden'}`}>
                      <Skeleton animation={false} circle width={30} height={30} />
                    </span>
                    <span className="text-sm mr-1 flex   w-16">
                      <span className={`${loading ? 'hidden' : 'block'} w-full`}>
                        {firstName}
                      </span>
                      <span
                        className={`${
                          loading ? 'block' : 'hidden'
                        } z-20 mx-1 my-2`}
                      >
                        <Skeleton animation={false} width={50} />
                      </span>
                      <AiOutlineDown
                        onClick={() => setDropDown(!dropDown)}
                        className={`${
                          loading ? 'hidden' : 'block'
                        } down text-xs ml-0.5 mt-1 cursor-pointer`}
                      />
                    </span>
                    <div>
                      <div
                        className="dropdown flex bg-white  shadow-xl flex-col absolute right-20 z-30 top-12 "
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
                        <div
                          className="logout flex py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white "
                          onClick={logout}
                        >
                          <div className="drop-item">
                            <IoLogOutOutline className="mt-1" />
                          </div>
                          <div className="drop-item">
                            <span className="l text-xs ml-2 cursor-pointer">
                              Logout
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${
                          loading ? 'flex ml-0 md:ml-0' : 'flex ml-2 md:ml-4'
                        }  `}
                      >
                        <span>
                          <FiGlobe
                            className={`text-lg ${
                              loading ? 'hidden' : 'flex'
                            } m-1`}
                          />
                          <span
                            className={`${loading ? 'block' : 'hidden'} z-20`}
                          >
                            <Skeleton
                              animation={false}
                              circle
                              width={30}
                              height={30}
                            />
                          </span>
                        </span>
                        <span
                          className={`${
                            loading ? 'hidden' : 'block'
                          } text-xs mt-1 md:mt-0  md:text-lg`}
                        >
                          English
                        </span>
                        <span
                          className={`${
                            loading ? 'block' : 'hidden'
                          } z-20 mx-1 my-2`}
                        >
                          <Skeleton animation={false} width={50} />
                        </span>
                        <span className={`${loading ? 'hidden' : 'block'}`}>
                          <AiOutlineDown className=" text-lg cursor-pointer pt-1 mt-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <ToastContainer />
      </div>
  )
}
export default NavBar;