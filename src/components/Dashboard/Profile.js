/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { MdEmail, MdLanguage } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import ProfileSkeleton from '../../skeletons/Profile/ProfileSkeleton';

const Profile = ({ userData }) => {
  const [loading, setLoading] = useState(true);
  const { firstName, lastName, email, profilePicture, officeAddres, preferedLanguage } = userData;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <ProfileSkeleton />
      ) : (
          <div className="col-start-3    row-start-2  col-end-13 p-4 md:p-12">
            <div className="card bg-white w-full rounded-sm items-center flex flex-col">
              <div className="imgs flex flex-col w-full items-center mb-4  ">
                <div
                  className="w-full bg-blue-600 hidden md:block md:relative  h-100"
                  alt="background"
                />
                <img
                  className="rounded-full h-32 w-32 md:absolute mt-2   md:bottom-10 border-white  border-8 "
                  src={
                    profilePicture ||
                    'https://res.cloudinary.com/nrob/image/upload/v1613451239/npc5d5r9g0nyyihppqxd.png'
                  }
                  alt="Profile"
                />
              </div>
              <div className="info items-center ml-1 md:mt-12 flex  flex-col">
                <h2 className="text-2xl flex justify-between text-gray-700 ">
                  <span> {firstName}</span> <br />
                  <span className="pl-2"> {lastName}</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-7 justify-between  w-full items-center ">
                <div className="info mt-1 md:mt-7  pr-10  md:p-0  items-center flex flex-col">
                  <div>
                    <h3 className=" flex">
                      <MdEmail className="mt-1  text-blue-600" />
                      <span className="text-sm  text-gray-700 ml-2">Email</span>
                    </h3>
                    <span className="text-gray-500">{email || 'none'}</span>
                  </div>
                </div>
                <div className="info mr-6 sm:mr-24 md:mr-0 items-center mt-7  pb-0 sm:pb-6  md:pb-2 flex  flex-col">
                  <div>
                    <h2 className="flex text-gray-700">
                      <MdLanguage className="mt-1  text-blue-600" />
                    Language
                  </h2>
                    <span className=" text-sm ml-2   text-gray-500">
                      {preferedLanguage || 'none'}
                    </span>
                  </div>
                </div>
                <div className="info mt-7 mr-10 md:mr-0 pl-1 items-center flex flex-col">
                  <div>
                    <h2 className="flex text-gray-700">
                      <IoLocationSharp className="mt-1 text-blue-600" />
                    Address
                  </h2>
                    <span className=" text-sm ml-2 text-gray-500">{officeAddres || 'none'}</span>
                  </div>
                </div>
              </div>
              <div className="border-gray-500 border-t py-4 w-10/12 flex-col flex items-center ">
                <Link to="/dashboard/profile/update/">
                  <button
                    type="submit"
                    className="outline-none mt-8   border-none
               focus:border-none  bg-blue-600 hover:bg-indigo-600 text-white px-8 py-1 rounded-sm"
                  >
                    Update
                </button>
                </Link>
              </div>
            </div>
            <Pagination />
          </div>
        )}
    </>
  );
};

export default Profile;
