import React from 'react';

export default function Navbar() {
  return (
    <div className="flex w-full box-border justify-between p5 py-4 px-4 md:px-8 border-b-2 bg-purple-700 text-white md:bg-white md:text-black ">
      <div className="">Barefoot-Nomad </div>
      <div className="flex space-x-6">
        <div className="bg-indigo-600 text-white w-32  py-1 text-center  hidden md:block">
          {' '}
          Register
        </div>
        <div className="bg-indigo-600 text-white w-32 py-1 text-center h-8 hidden md:block">
          Login
        </div>
        <div className="">
          <i className="fa fa-globe"></i>
        </div>
        <div className="">english</div>
        <div className="">
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
}
