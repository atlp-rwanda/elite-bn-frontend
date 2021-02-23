import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Toastify from 'toastify-js';
import { useState } from 'react';
export default function accomodation() {
    const dispatch = useDispatch();
    const [names, addName] = useState({ name: '', description: '', location_id: '', cost: '', capacity: '', roomsLeft: '' });

    const add = (e) => {
        e.preventDefault();
        dispatch({ type: 'CREATE_ACCOMODATION', payload: names })
        axios.post("http://localhost:5000/api/v1/accomodations/create").then(

            Toastify({
                text: "accomodation was created",
                duration: 3000,
                close: true,
                position: 'right',
                backgroundColor: 'green',
                color: 'white',
            }).showToast()


        ).catch(
            Toastify({
                text: 'errorMessage',
                duration: 3000,
                close: true,
                position: 'right',
                backgroundColor: 'red',
                color: 'white',
            }).showToast()
        )
    }

    const changeNames = (e) => {

        addName({ ...names, [e.target.name]: e.target.value });
    }
    return (
        <div className="h-screen">
            <div className=" -mt-40">
                {/* <div className="justify-center bg-blue-500 px-4 float-left md:bg-red-500 md:px-36 py-36"> */}
                <div className="sx:absolute  md:relative ml-auto  md:ml-72 bg-white mt-44 mx-60  justify-center shadow-lg rounded-md">
                    <div className="content-center text-indigo-600 py-8">
                        <h3 className="text-center">Create Accomodation</h3>
                    </div>
                    <form onSubmit={add} className="px-10">
                        <div>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name" value={names.name} onChange={changeNames}
                                className="border-primary-100 rounded content-center  my-4 center shadow-md h-10 text-primary-100"
                            />                             </div>
                        <div>
                            <input
                                name="description"
                                type="text" value={names.description} onChange={changeNames}
                                placeholder="description"
                                className="border-primary-100 rounded content-center  my-4 center shadow-md h-10 text-primary-100"
                            />
                        </div>
                        <div>
                            <input
                                name="location_id"
                                type="text" value={names.location_id} onChange={changeNames}
                                placeholder="location id"
                                className="border-primary-100 rounded content-center  my-4 center shadow-md h-10 text-primary-100"
                            />
                        </div>
                        <div>
                            <input
                                name="cost"
                                type="text"
                                placeholder="image" value={names.cost} onChange={changeNames}
                                className="border-primary-100 rounded content-center  my-4 center shadow-md h-10 text-primary-100"
                            />
                        </div>
                        <div>
                            <input
                                name="capacity"
                                type="text" value={names.capacity} onChange={changeNames}
                                placeholder="capacity"
                                className="border-primary-100 rounded content-center  my-4 center shadow-md h-10 text-primary-100"
                            />
                        </div>
                        <div>
                            <input
                                name="roomsLeft"
                                type="text" value={names.roomsLeft} onChange={changeNames}
                                placeholder="roomsLeft"
                                className="  border-primary-100 rounded content-center  my-4 center shadow-md h-10 text-primary-100"
                            />
                        </div>
                        <div>
                            <button
                                className="border-primary-100 bg-indigo-700 text-white rounded content-center  my-4 center shadow-md h-10 text-primary-100"
                            >CreateAccomodation</button>
                        </div>

                    </form>
                </div>
                {/* </div> */}

            </div>
        </div>
    )
} 
