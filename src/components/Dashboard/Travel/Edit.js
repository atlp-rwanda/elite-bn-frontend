/* eslint-disable react/prop-types */
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Edit = (props) => {
  const {
    tRequest, close, editFrom, editTravelReason, editTravelType, editTravelReturnDate, save,
  } = props;
  const { accomodation } = tRequest;
  const { to } = tRequest;
  return (
    <div className="card flex flex-col items-center justify-center absolute top-1 w-2/3 mx-auto z-10">
      <FontAwesomeIcon onClick={close} icon={faTimesCircle} className="top-2 right-2 absolute text-2xl text-gray-500 hover:text-gray-800" />
      <div className="flex flex-col mt-4 w-5/6 md:w-3/4 mx-auto">
        <span>From:</span>
        <input onChange={editFrom} className="w-full mt-1 px-2 shadow-md h-10 focus:outline-none border border-gray-400 hover:border-primary-100 rounded" value={tRequest.orgin} type="text" />
      </div>
      {to && (
      <div className="flex flex-col mt-2 w-5/6 md:w-3/4 mx-auto">
        <span>To:</span>
        <input className="w-full cursor-not-allowed mt-1 px-2 shadow-md h-10 focus:outline-none border border-gray-400 hover:border-primary-100 rounded" readOnly defaultValue={to.name} type="text" />
      </div>
      )}
      {accomodation && (
      <div className="flex flex-col mt-2 w-5/6 md:w-3/4 mx-auto">
        <span>Accomodation:</span>
        <input className="w-full cursor-not-allowed mt-1 px-2 shadow-md h-10 focus:outline-none border border-gray-400 hover:border-primary-100 rounded" readOnly defaultValue={accomodation.name} type="text" />
      </div>
      )}
      <div className="flex flex-col mt-2 w-5/6 md:w-3/4 mx-auto">
        <span>Travel Reason:</span>
        <input className="w-full mt-1 px-2 shadow-md h-10 focus:outline-none border border-gray-400 hover:border-primary-100 rounded" onChange={editTravelReason} contentEditable={false} value={tRequest.reason} type="text" />
      </div>
      <div className="flex flex-col mt-2 w-5/6 md:w-3/4 mx-auto">
        <span>Travel Type:</span>
        <select className="w-full mt-1 px-2 shadow-md h-10 focus:outline-none border border-gray-400 hover:border-primary-100 rounded" onChange={editTravelType} value={tRequest.type}>
          <option>One-way</option>
          <option>Two-ways</option>
        </select>
      </div>
      <div className="flex flex-col mt-2 w-5/6 md:w-3/4 mx-auto">
        <span>Return Date:</span>
        <input className="w-full mt-1 px-2 shadow-md h-10 focus:outline-none border border-gray-400 hover:border-primary-100 rounded" onChange={editTravelReturnDate} value={tRequest.returnDate} type="date" />
      </div>
      <button onClick={save} className="my-4 w-1/2 bg-blue-700 rounded-md py-2 text-gray-300" type="button">Save</button>
    </div>
  );
};

export default Edit;
