import React from 'react';
import axios from 'axios';;
import Image from '../../../assets/images/accomodationImage.png';
import { MdEdit, MdDelete } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { GrMoney } from 'react-icons/gr';
import { useState } from 'react';

export default function accomodation() {
    const Delete = (name) => {
        axios.get("http://localhost:5000/api/v1/delete/:accomodation").then(
            // name.filter()
        )
    }
    const [accomodations, setAccomodation] = useState([]);
    axios.get("http://localhost:5000/api/v1/accomodations/read")
        .then((response) => {
            setAccomodation(response.data.data)
        }).catch((error) => {
            // console.log(error)
        })

    return (

        <div className="h-screen">
            <div className="w-full px-26 -mt-40">
                <div className="py-36 ">
                    <div className="flex  px-10 justify-between  mt-4 pt-4 flex-wrap">
                        {accomodations.map((accomodation) => (
                            <div className="w-52 md:w-80 md:bg-white shadow-md mt-2 rounded-lg ">
                                <div className="">
                                    <div>
                                        <img className="h-48 w-full"
                                            src={Image}
                                            alt=""
                                        />
                                    </div>
                                    <div className=" p-2 ">
                                        <div className="flex space-x-2">
                                            <div className="text-blue-700 ">
                                                <button> <MdEdit /></button>
                                            </div>
                                            <div className="text-red-500">
                                                <button onClick={Delete}><MdDelete /></button>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <label className="font-semibold text-gray-700">{accomodation.name}</label>
                                            <ul className="text-sm space-y-2 text-gray-600 text-gray-600">

                                                <li><label className="">{accomodation.description}</label></li><li ><label className="flex space-x-2"><IoLocationSharp /> <span>Rusizi,kamembe</span></label></li>
                                                <li><label className="flex space-x-2"><GrMoney /><span>5000 frw</span> </label></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}
