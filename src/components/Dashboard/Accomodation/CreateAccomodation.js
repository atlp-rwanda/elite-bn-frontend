import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { errorToast, successToast } from '../../../utils/toast';

const CreateAccomodation = props => {
  const [image, setImage] = useState("");
  const initAccommodation = {
    name: "",
    description : "",
    location_id : "",
    cost : "",
    facilities : [""],
    capacity: 0,
    roomsLeft : 0
  };
  const [accommodation, setAccommodation] = useState(initAccommodation);
  const [accommodations, setAccommodations] = useState([]);

  const fetchAccommodations = async () => {
    const res = await fetch('http://localhost:5000/api/v1/accomodations/read');
    const results = await res.json();

    if (results.status === 200) {
      setAccommodations(results.data);
    } else {
      errorToast(results.message || 'Failed to fetch Accommodations!');
    }
  }

  useEffect(() => fetchAccommodations(), []);

  const handleCreate = async e => {
    e.preventDefault();

    const fd = new FormData(); 
    fd.append('image', image);
    fd.append('name', accommodation.name);
    fd.append('description', accommodation.description);
    fd.append('location_id', accommodation.location_id);
    fd.append('cost', accommodation.cost);
    fd.append('capacity', accommodation.capacity);
    fd.append('roomsLeft', accommodation.roomsLeft);
    fd.append('facilities[]', accommodation.facilities[0]);

    const token = localStorage.getItem('jwtToken');

    const res = await fetch("http://localhost:5000/api/v1/accomodations/create", {
      method : 'post',
      body : fd,
      headers : {
        // "Content-Type" : "multipart/form-data",
        "Authorization" : `Bearer ${token}`
      }
    });
    const data = await res.json();
    if (data.status === 201) {
      setAccommodation(initAccommodation);
      successToast("Accommodation recorded successfully");
      await fetchAccommodations();
    } else {
      errorToast(data.message || "Server Error")
    }
  }
  
  return (

    <div className="flex w-11/12 md:w-4/5 gap-2 mt-5 justify-center flex-col md:flex-col items-center md:items-center  ">

      <div className="flex-auto  w-11/12 md:w-6/12 space-x-2 p-2 flex justify-center items-start border-gray-300 border-2">

        <form onSubmit={handleCreate} className="w-3/4 bg-white p-5 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
          <h1 className=" text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Create accomodation location </h1>

          <label className="block pt-5">
            <span className="text-xs font-medium text-gray-500">Accomodation name</span>
            <input type="text" value={accommodation.name} onChange={(e) => setAccommodation({ ...accommodation, name: e.target.value })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Accomodation name" />
          </label>
          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Location id</span>
            <input type="text" value={accommodation.location_id} onChange={(e) => setAccommodation({ ...accommodation, location_id: e.target.value })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Location id" />
          </label>

          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Cost</span>
            <input type="number" value={accommodation.cost} onChange={(e) => setAccommodation({ ...accommodation, cost: e.target.value })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Cost" />
          </label>
          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Facilities</span>
            <input value={accommodation.facilities} onChange={(e) => setAccommodation({ ...accommodation, facilities: [e.target.value] })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" />
          </label>
          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Capacity</span>
            <input type="number" value={accommodation.capacity} onChange={(e) => setAccommodation({ ...accommodation, capacity: e.target.value })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Capacity" />
          </label>
          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Rooms Left</span>
            <input type="number" value={accommodation.roomsLeft} onChange={(e) => setAccommodation({ ...accommodation, roomsLeft: e.target.value })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Rooms Left" />
          </label>

          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Description</span>
            <textarea value={accommodation.description} onChange={(e) => setAccommodation({ ...accommodation, description: e.target.value })} className="form-textarea mt-1 block w-full border-2 p-2 text-xs rounded" rows="3" placeholder="Enter a brief description.">
              
            </textarea>
          </label>


          <label className="block pt-2 flex flex-col">
            <span className="text-xs font-medium text-gray-500 pb-2">Accomodation image</span>
            <input onChange={e => setImage(e.target.files[0])} type="file" id="myFile" name="filename" />
          </label>

          <button
            id="submit-button"
            className="bg-indigo-600 text-white justify-center w-full h-8 rounded mt-3"
            type="submit" > SUBMIT </button>
        </form>

      </div>

      <div className="flex-auto  w-11/12 md:w-11/12 space-x-2 p-2 flex justify-center items-start border-gray-300 border-2 mt-10 ">

        <div className="flex flex-col w-10/12 md:w-11/12">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="  divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ACCOMODATION NAME
                       </th>

                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        LOCATION ID
                      </th>

                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >
                        DESCRIPTION
                       </th>

                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        COST
                      </th>

                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        FACILITIES
                       </th>

                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        CAPACITY
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ROOMS LEFT
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                      </th>

                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {accommodations.map((accom) => (
                      <tr key={accom.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded" src={accom.image} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{accom.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{accom.location_id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">{accom.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{accom.cost}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{accom.facilities[0]}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{accom.capacity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{accom.roomsLeft}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Delete</a>
                      </td>
                    </tr>
                    ))}
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

export default CreateAccomodation;
