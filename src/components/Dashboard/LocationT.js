import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { getLocations, deleteLocation } from '../../store/actions/LocationAction'

const LocationT = ({ locations, getLocations, deleteLocation }) => {

  useEffect(() => {
    getLocations();

  }, [getLocations]);

  const locationsArray = locations.map(location => (

    <tr key={location.id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {location.location_id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {location.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-indigo-600 hover:text-indigo-900" onClick={() => deleteLocation(location.id, history)}>Delete</button>
      </td>
    </tr>

  ))

  return (

    <Fragment>

      <div className="flex w-11/12 md:w-3/5 gap-2 mt-5 justify-center flex-col md:flex-row items-center md:items-start">

        <div className="flex-auto  w-11/12 md:w-3/5 space-x-2 p-2 flex justify-center items-start border-gray-300 border-2 ">

          <div className="flex flex-col w-10/12 md:w-full">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          LOCATION NUMBER
                       </th>

                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          LOCATION NAME
                      </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Delete</span>
                        </th>

                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">

                      {locationsArray}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </Fragment>
  )

}

LocationT.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
  deleteLocation: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  locations: state.LocationsData.locations
});

export default connect(mapStateToProps, { getLocations, deleteLocation })(LocationT);

