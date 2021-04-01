
import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createLocation } from '../../store/actions/LocationAction'

import PropTypes from 'prop-types'


const LocationForm = ({ createLocation, history }) => {


  const [formData, setFormData] = useState({
    location_id: '',
    name: ''

  });

  const {
    location_id,
    name
  } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  }
  );

  const onSubmit = e => {
    e.preventDefault();
    createLocation(formData, history);
  }


  return (

    <Fragment>

      <div className="flex w-11/12 md:w-5/12 gap-2 mt-5 justify-center flex-col md:flex-row items-center md:items-start ">
        <div className="flex-auto  w-11/12 md:w-2/5 space-x-2 p-2 flex justify-center items-start border-gray-300 border-2">
          <form onSubmit={e => onSubmit(e)} className="w-3/4 bg-white p-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
            <h1 className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Create location </h1>

            <label className="block pt-5">
              <span className="text-xs font-medium text-gray-500">Location number</span>
              <input type="text" className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Enter a number" name="location_id" value={location_id} onChange={e => onChange(e)} />
            </label>

            <label className="block pt-2">
              <span className="text-xs font-medium text-gray-500"> Location name</span>
              <input type="text" className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" name="name" placeholder="Enter a name" value={name} onChange={e => onChange(e)} />
            </label>

            <button
              id="submit-button"
              className="bg-indigo-600 text-white justify-center w-full h-8 rounded mt-3"
              type="submit" > SUBMIT </button>
          </form>
        </div>

      </div>
    </Fragment>
  )
}

LocationForm.propTypes = {
  createLocation: PropTypes.func.isRequired,
}
export default connect(null, { createLocation })(withRouter(LocationForm));