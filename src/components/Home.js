
import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> Setup jest&enzyme testing environment (#5)

const Index = () => (
  <div className="text-center">
    <Link
      className="block w-64 text-center mt-2 m-auto bg-gray-300 hover:shadow-lg"
      to="/counter"
    >
      Counter
    </Link>
    <Link
      className="block w-64 text-center mt-2 m-auto bg-gray-300 hover:shadow-lg"
      to="/login"
    >
      login
    </Link>
    <h2 className="m-6">
      Welcome to Our Very beginning of this Barefoot Front-end Implementation
    </h2>
  </div>
);

export default Index;
