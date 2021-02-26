import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Location extends Component {

  render() {

    const rowClass =
      "flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none"
    const leftClass = "w-full sm:w-1/3 font-medium text-center sm:text-left font-normal text-gray-600 text-sm"
    const rightClass = "flex-1 text-center sm:text-left font-normal text-gray-600 text-sm"

    return (

      <div className=" flex justify-center mt-16 ">

        <div className="rounded overflow-hidden shadow-lg my-2 w-full md:w-5/12  bg-white ">

          <div className="px-6 py-4 w-full">

            <div className="w-full divide-y divide-gray-600 ">
              <div className="mb-7">

                <h1 class="font-medium text-base text-center text-gray-600 ">Specify the accommodation location</h1>

                <div className="mt-4">
                  <div class="mb-3">
                    <label class="font-medium text-left text-sm mb-2 text-gray-600 ">Location Id</label>
                    <div>
                      <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="First name" type="text" />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Location Name</label>
                    <div>
                      <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Last name" type="text" />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button className="bg-white hover:bg-gray-100 px-1 py-1.5 w-full border-2 border-gray-400 rounded shadow font-normal text-gray-600 text-sm">
                      <Link to="/profile/edit">
                        Create location
        </Link>
                    </button>
                  </div>

                </div>

              </div>

              <div>
                <h1 class="font-medium text-base text-center text-gray-600  mt-7">Create accommodation</h1>

                <div className="mt-4">
                  <div class="mb-3">
                    <label class="font-medium text-left text-sm mb-2 text-gray-600 ">Name</label>
                    <div>
                      <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Name" type="text" />
                    </div>
                  </div>

                  <div>
                    <label for="description" class="font-medium text-left text-sm mb-2 text-gray-600">
                      Description
                   </label>
                    <div class="mt-1">
                      <textarea id="about" name="about" rows="3" class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Description"></textarea>
                    </div>

                  </div>

                  <div class="mb-3">
                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Location Id</label>
                    <div>
                      <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Location Id" type="text" />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Facilities</label>
                    <div>
                      <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Facilities" type="text" />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="facilities" class="font-medium text-left text-sm mb-2 text-gray-600">Facilities</label>
                    <select id="facilities" name="facilities" autocomplete="facilities" class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded focus:outline-none focus:border-indigo-500 transition-colors">
                      <option>Swimming pool</option>
                      <option>Bar</option>
                      <option>Restaurant</option>
                    </select>
                  </div>



                  <div class="mb-3">
                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Cost</label>
                    <div>
                      <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Cost" type="text" />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="font-medium text-left text-sm mb-2 text-gray-600">Capacity</label>
                    <div>
                      <input class="w-full px-1 py-1 mb-1 border-2  border-gray-400 rounded  focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Capacity" type="text" />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="font-medium text-left text-sm mb-2 text-gray-600">
                      Choose image
                    </label>
                    <div>
                      <input type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button className="bg-white hover:bg-gray-100 px-1 py-1.5 w-full border-2 border-gray-400 rounded shadow font-normal text-gray-600 text-sm">
                      <Link to="/profile/edit">
                        Create accommodation
                          </Link>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>


      </div>



    )
  }
}

export default Location;