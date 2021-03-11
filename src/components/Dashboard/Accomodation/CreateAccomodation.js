
import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../../assets/images/accomodationImage.png';

const CreateAccomodation = props => {


  return (

    <div class="flex w-11/12 md:w-4/5 gap-2 mt-5 justify-center flex-col md:flex-col items-center md:items-center  ">

      <div className="flex-auto  w-11/12 md:w-6/12 space-x-2 p-2 flex justify-center items-start border-gray-300 border-2">

        <form className="w-3/4 bg-white p-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
          <h1 className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Create accomodation location </h1>

          <label class="block pt-5">
            <span class="text-xs font-medium text-gray-500">Accomodation name</span>
            <input type="email" class="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Accomodation name" />
          </label>
          <label class="block pt-2">
            <span class="text-xs font-medium text-gray-500">Location id</span>
            <input type="email" class="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Location id" />
          </label>

          <label class="block pt-2">
            <span class="text-xs font-medium text-gray-500">Cost</span>
            <input type="email" class="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Cost" />
          </label>
          <label class="block pt-2">
            <span class="text-xs font-medium text-gray-500">Facilities</span>
            <input type="email" class="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Facilities" />
          </label>
          <label class="block pt-2">
            <span class="text-xs font-medium text-gray-500">Capacity</span>
            <input type="email" class="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Capacity" />
          </label>

          <label class="block pt-2">
            <span class="text-xs font-medium text-gray-500">Description</span>
            <textarea class="form-textarea mt-1 block w-full border-2 p-2 text-xs rounded" rows="3" placeholder="Enter a brief description."></textarea>
          </label>


          <label class="block pt-2 flex flex-col">
            <span class="text-xs font-medium text-gray-500 pb-2">Accomodation image</span>
            <input type="file" id="myFile" name="filename"></input>
          </label>

          <button
            id="submit-button"
            className="bg-indigo-600 text-white justify-center w-full h-8 rounded mt-3"
            type="submit" > SUBMIT </button>
        </form>

      </div>

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
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded" src={Image} />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Selena Hotel
                    </div>

                          </div>
                        </div>
                      </td>

                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1000
                       </td>

                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">

                        Book by January 31 to save up to 25% on stays
                        until August 31. Join Radisson Rewards to unlock  the full
                        discount. Enjoy restaurant discounts.

                      </td>

                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3000
                        </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Swimming pool, Bar
                        </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        10
                        </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        5
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

CreateAccomodation.propTypes = {

}

export default CreateAccomodation
