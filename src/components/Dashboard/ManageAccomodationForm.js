
import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'


import { connect } from 'react-redux';
import { getAccomodations, deleteAccomodation } from '../../store/actions/AccomodationAction'


const ManageAccomodationForm = ({ deleteAccomodation, accomodations, getAccomodations }) => {

  useEffect(() => {
    getAccomodations();

  }, [getAccomodations]);

  const accomodationArray = accomodations.map(accomodation => (

    <tr key={accomodation.id}>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-10 w-10">
            <img class="h-10 w-10 rounded" src={accomodation.image} />
          </div>
          <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
              {accomodation.name}

            </div>

          </div>
        </div>
      </td>

      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {accomodation.location_id}

      </td>

      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
        {accomodation.description}
      </td>

      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {accomodation.cost}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {accomodation.facilities}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {accomodation.capacity}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {accomodation.roomsLeft}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" class="text-indigo-600 hover:text-indigo-900" onClick={() => deleteAccomodation(accomodation.id)}>Delete</a>
      </td>
    </tr>

  ))


  return (

    <Fragment>
      <div class="flex w-11/12 md:w-4/5 gap-2 mt-5 justify-center flex-col md:flex-col items-center md:items-center  ">

        <div class="flex-auto  w-11/12 md:w-11/12 space-x-2 p-2 flex justify-center items-start border-gray-300 border-2 mt-10 ">

          <div class="flex flex-col w-10/12 md:w-11/12">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="  divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACCOMODATION NAME
                       </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          LOCATION ID
                      </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                          DESCRIPTION
                       </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          COST
                      </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          FACILITIES
                       </th>

                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          CAPACITY
                      </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ROOMS LEFT
                      </th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Delete</span>
                        </th>

                      </tr>
                    </thead>

                    <tbody class="bg-white divide-y divide-gray-200">

                      {accomodationArray}

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

ManageAccomodationForm.propTypes = {
  getAccomodations: PropTypes.func.isRequired,
  accomodations: PropTypes.array.isRequired,
  deleteAccomodation: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  accomodations: state.accommodationsData.accomodations
});

export default connect(mapStateToProps, { getAccomodations, deleteAccomodation })(ManageAccomodationForm);

