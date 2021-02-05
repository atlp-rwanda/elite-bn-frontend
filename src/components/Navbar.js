import React from 'react';

export default function Navbar() {
  return (
    <div className="flex w-full box-border justify-between p5 py-4 px-4 md:px-8 border-b-2 bg-purple-700 text-white md:bg-white md:text-black ">
      <div className="">
        <h1>Barefoot-Nomad</h1>
      </div>
      <div className="flex space-x-6">

        <div className="bg-indigo-600 text-white py-1 w-32 text-center h-8 hidden md:block"><button type="submit" id="register-btn">Register</button></div>
        <div className="bg-indigo-600 text-white py-1 w-32 text-center h-8 hidden md:block"><button type="submit" id="login-btn">Login</button></div>
        <div className="">
          <i className="fa fa-globe" />
        </div>
        <div id="english">English</div>
        <div className="">
          <i className="fa fa-angle-down" />
        </div>
      </div>
    </div>
  );
}
