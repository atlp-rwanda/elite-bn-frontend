import React, { useState, useEffect } from 'react'

import { errorToast, successToast } from '../../utils/toast';

const CreateAccomodationForm = props => {
  const [image, setImage] = useState("");
  const initAccommodation = {
    name: "",
    description: "",
    location_id: "",
    cost: "",
    capacity: 0
  };
  const [accommodation, setAccommodation] = useState(initAccommodation);


  const fetchAccommodations = async () => {
    const res = await fetch('https://elite-staging.herokuapp.com/api/v1/accomodations/read');
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
    fd.append('capacity', accommodation.capacity)

    const token = localStorage.getItem('jwtToken');

    const res = await fetch("https://elite-staging.herokuapp.com/api/v1/accomodations/create", {
      method: 'post',
      body: fd,
      headers: {
        // "Content-Type" : "multipart/form-data",
        "Authorization": `Bearer ${token}`,
        'permission_name': 'c_accomodation'
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
            <span className="text-xs font-medium text-gray-500">LocationNumb</span>
            <input type="text" value={accommodation.location_id} onChange={(e) => setAccommodation({ ...accommodation, location_id: e.target.value })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="LocationNumb" />
          </label>

          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Cost</span>
            <input type="number" value={accommodation.cost} onChange={(e) => setAccommodation({ ...accommodation, cost: e.target.value })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Cost" />
          </label>

          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Capacity</span>
            <input type="number" value={accommodation.capacity} onChange={(e) => setAccommodation({ ...accommodation, capacity: e.target.value })} className="form-input mt-1 block w-full border-2 p-2 text-xs rounded" placeholder="Capacity" />
          </label>


          <label className="block pt-2">
            <span className="text-xs font-medium text-gray-500">Description</span>
            <textarea type="text" value={accommodation.description} onChange={(e) => setAccommodation({ ...accommodation, description: e.target.value })} className="form-textarea mt-1 block w-full border-2 p-2 text-xs rounded" rows="3" placeholder="Enter a brief description.">

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

    </div>

  )


}

export default CreateAccomodationForm;
