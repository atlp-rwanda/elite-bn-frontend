/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { faBan, faCheckCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Travel = (props) => {
  const { travelRequest, changed, edit } = props;
  const {
    accomodation, to, requester,
  } = travelRequest;
  return (
    <tr className="hover:bg-gray-300">
      <td className="tdata"><input type="checkbox" onChange={changed} /></td>
      <th
        className="tdata capitalize hover:text-blue-700 cursor-pointer"
        onClick={edit}
      >
        {requester && requester.firstName}
        {' '}
        <FontAwesomeIcon icon={faEdit} />
      </th>
      <td className="tdata capitalize">{to && to.name}</td>
      <td className="tdata capitalize">{accomodation && accomodation.name}</td>
      <td className="tdata capitalize">{travelRequest.type}</td>
      <td className="tdata">{travelRequest.reason}</td>
      <td className="tdata capitalize">
        {travelRequest.status}
        {' '}
        {travelRequest.status === 'approved' ? <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600" /> : null}
        {travelRequest.status === 'rejected' ? <FontAwesomeIcon icon={faBan} className="text-red-600" /> : null}
      </td>
      <td className="tdata">{travelRequest.returnDate}</td>
    </tr>
  );
};

export default Travel;
