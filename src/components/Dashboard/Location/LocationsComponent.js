import React from 'react'
import PropTypes from 'prop-types'
// import Image from '../../../assets/images/accomodationImage.png';

const LocationsComponent = props => {



  return (

    <div class="flex w-11/12 md:w-4/5 gap-2 mt-5 justify-center flex-col md:flex-row items-center md:items-start  ">

      <div className="flex-auto  w-11/12 md:w-2/5 space-x-2 p-2 flex justify-center items-start border-gray-300 border-2">

        <form className="w-3/4 bg-white p-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
          <h1 className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Create accomodation location </h1>

          <label class="block pt-5">
            <span class="text-xs font-medium text-gray-500">LocationId</span>
            <input type="email" class="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="LocationId" />
          </label>
          <label class="block pt-2">
            <span class="text-xs font-medium text-gray-500">LocationName</span>
            <input type="email" class="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="LocationName" />
          </label>

          <button
            id="submit-button"
            className="bg-indigo-600 text-white justify-center w-full h-8 rounded mt-3"
            type="submit" > SUBMIT </button>
        </form>

      </div>

      <div class="flex-auto  w-11/12 md:w-3/5 space-x-2 p-2 flex justify-center items-start border-gray-300 border-2 ">

        <div class="flex flex-col w-10/12 md:w-full">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        LOCATION ID
                       </th>

                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        LOCATION NAME
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
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1000
                       </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Kigali, Rwanda
                        </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}

LocationsComponent.propTypes = {

}

export default LocationsComponent
