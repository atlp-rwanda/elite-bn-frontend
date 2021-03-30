import React from 'react';
import { Link } from 'react-router-dom';
import permission from '../../assets/images/permissions.png';
import request from '../../assets/images/request.png';
import accomodation from '../../assets/images/accomodations.png';
import travels from '../../assets/images/trips.png';

const Main = () => (
  <div className="flex flex-col items-center w-11/12 mx-auto">
    <div className="mt-2 grid gap-4 md:grid-cols-3 items-center">
      <div className="flex flex-col rounded-md shadow hover:shadow-xl bg-gray-50">
        <Link className="bg-primary object-cover rounded-t-md p-1" to="/dashboard/permissions">
          <img src={permission} alt="travels" className="object-cover" />
        </Link>
        <h3 className="px-4 mt-2 text-xl text-gray-800">Roles and Permissions</h3>
        <p className="px-4 mb-2 mt-1 text-sm text-gray-600">Authentications and Authorizations</p>
      </div>
      <div className="flex flex-col rounded-md shadow hover:shadow-xl bg-gray-50">
        <Link className="bg-primary object-cover rounded-t-md p-1" to="/dashboard/users">
          <img src={request} alt="travels" className="object-cover" />
        </Link>
        <h3 className="px-4 mt-2 text-xl text-gray-800">Users</h3>
        <p className="px-4 mb-2 mt-1 text-sm text-gray-600">Assign users to the line manager</p>
      </div>
      <div className="flex flex-col rounded-md shadow hover:shadow-xl bg-gray-50">
        <Link className="bg-primary object-cover rounded-t-md p-1" to="/dashboard/travels">
          <img src={travels} alt="travels" className="object-cover" />
        </Link>
        <h3 className="px-4 mt-2 text-xl text-gray-800">Travel Requests</h3>
        <p className="px-4 mb-2 mt-1 text-sm text-gray-600">Manage the travel requests</p>
      </div>
      <div className="flex flex-col rounded-md shadow hover:shadow-xl bg-gray-50">
        <Link className="bg-primary object-cover rounded-t-md p-1" to="/dashboard/accomodations">
          <img src={accomodation} alt="travels" className="object-cover" />
        </Link>
        <h3 className="px-4 mt-2 text-xl text-gray-800">Accomodations</h3>
        <p className="px-4 mb-2 mt-1 text-sm text-gray-600">Book affordable accomodations</p>
      </div>
    </div>
  </div>
);

export default Main;
