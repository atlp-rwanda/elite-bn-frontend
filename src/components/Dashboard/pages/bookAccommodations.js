/* eslint-disable */
import React from 'react'
import Facilities from './facilities';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookAccommodation = () => {
  const token = localStorage.getItem('jwtToken');

  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());
  const [bkdAcc, setBkbAcc] = useState([]);
  const [specificAcc, setSpecificAcc] = useState([]);
  const [bookedAccommodations, setBookedAccommodations] = useState(['la folie']);
  const [active, setActive] = useState(1);

  const [focusAccommodation, setFocusAccommodation] = useState({
    image: 'https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg',
  });

  let maxBooked;
  useEffect(() => {
    const getBkdAcc = async () => {
      const getBookedAccommodations = async () => {
        const tasksFromServer = await BookedAccommodations();
        setBookedAccommodations(tasksFromServer);
      };

      getBookedAccommodations();
      const accomodationsFromServer = await BKDAccomnodat();
      maxBooked = accomodationsFromServer;
      console.log(maxBooked);
      BKDAccomnodat().then((r) => {
        setBkbAcc(accomodationsFromServer);
        getSpecificAccommodations().then((k) => {
          setSpecificAcc(k);
        });
      });
    };
    shiftTab('nav-all');
    getBkdAcc();
  }, []);

  const changeTab = (n) => {
    setActive(n)
  };
  const openAccommodationBook = (accommodation) => {
    setFocusAccommodation(accommodation);
  };
  const shiftTab = (id) => {
    document.getElementById('mainAll').style.display = 'none';
    document.getElementById('mainAvailable').style.display = 'none';
    if (id == 'nav-all') {
      document.getElementById('mainAll').style.display = 'grid';
    } else {
      document.getElementById('mainAvailable').style.display = 'grid';
    }
  };

  const BookedAccommodations = async () => {
    const res = await axios.get('https://elite-staging.herokuapp.com/api/v1/booking/availableAccomodations', {
      headers: { Authorization: `Bearer ${token}` },

    });
    return res.data.data;
  };

  const getSpecificAccommodations = async () => {
    const retval = [];
    axios({
      method: 'GET',
      url: 'https://elite-staging.herokuapp.com/api/v1/accomodations/read',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      for (const bookedAcc of res.data.data) {
        for (const accWithId of maxBooked) {
          if (bookedAcc.id == accWithId.AccomodationId) {
            console.log(bookedAcc);
            retval.push(bookedAcc);
          }
        }
      }
      setSpecificAcc(retval);

      return retval;
    });
  };
  const BKDAccomnodat = async () => {
    const res = await axios.get('https://elite-staging.herokuapp.com/api/v1/booking/bookedAccomodations',
      {
        headers: { Authorization: `Bearer ${token}` },

      });
    return res.data.data;
  };

  const BookThisAccommodation = async (accommodation) => {
    const data = {
      checkinDate: checkinDate.toLocaleDateString().toString().replaceAll('/', '-'),
      checkoutDate: checkoutDate.toLocaleDateString().toString().replaceAll('/', '-'),
      AccomodationId: Number(accommodation.id),
    };
    try {
      const res = await axios(
        {
          method: 'post',
          url: 'https://elite-staging.herokuapp.com/api/v1/booking/book',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', permission_name: 'book_accomodation' },
          data,
        },
      );
      alert('Accommodation Was succesfully booked');
      return res.data.data;
    } catch (error) {
      // alert(error);
      document.getElementById('processor').style.display = 'block';
      document.getElementById('processor').innerHTML = 'Something went wrong';
      console.log(error.response);
    }
  };

  return (
    <div className="col-start-3 row-start-2  col-end-13 p-4 md:p-12 border-1 border-gray-200">
      <div>
        <div id="navbar" className="flex space-x-4 w-full items-center mt-4">
          <p
            id="nav-all"
            className={`${active === 1 ? 'text-gray-100': 'text-blue-700'} ${active === 1 ? 'bg-blue-700': 'bg-white'} px-2  mb-2 py-2 text-lg  border-b-1  uppercase ${active === 1 ? 'font-bold': 'font-normal'}  ${active === 1 ? 'border-b-4 border-blue-700' : ''}`}
            onClick={(e) => {
              changeTab(1);
              shiftTab(e.target.id);
              document.getElementById(e.target.id).style.display = 'block';
            }}
          >
            AVAILABLE ACCOMMODATIONS
          </p>
          <p
            id="nav-available"
            className={`${active === 2 ? 'text-gray-100': 'text-blue-700'} ${active === 2 ? 'bg-blue-700': 'bg-white'} px-2 mb-2 py-2 uppercase text-lg ${active === 2 ? 'font-bold': 'font-normal'} ${active === 2 ? 'border-b-4 border-blue-700' : ''}`}
            onClick={(e) => {
              changeTab(2);
              shiftTab(e.target.id);
              document.getElementById(e.target.id).style.display = 'block';
            }}
          >
            BOOKED ACCOMMODATIONS
          </p>

        </div>
        <div className="flex">
          <div id="mainAll" className="space-x-4 mt-2">
            {
                   bookedAccommodations.map((accommodation) => (
                     <div
                       id={`${accommodation.id}`}
                       className={`flex space-x-4 bg-white  shadow-md  mt-2 ml-4 ${accommodation.roomsLeft > 0 ? '' : 'bg-red-50'}`}
                       onClick={() => {
                         openAccommodationBook(accommodation);
                       }}
                     >
                       <img src={`${accommodation.image}`} onError={(e) => e.currentTarget.src = 'https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg'} className="w-1/2" alt="hotel" />
                       <div className="py-4">
                         <p className="text-xl font-normal text-gray-600 uppercase">{accommodation.name}</p>
                         <p className="text-sm font-thin text-gray-500">
                           Capacity:
                           {accommodation.capacity}
                         </p>
                         <p className="text-sm font-thin text-gray-500">
                           Available Rooms:
                           {accommodation.roomsLeft}
                         </p>
                         <p className="text-sm font-thin text-gray-500">
                           Cost:
                           {accommodation.cost}
                           {' '}
                           FRW
                         </p>
                         <Facilities facilities={accommodation.facilities} />
                       </div>
                     </div>
                   ))
                }
          </div>
          <div id="mainAvailable" className="mt-2 grid grid-cols-2">
            {
                   specificAcc !== undefined ? (
                     specificAcc.map((accommodation) => (
                       <div
                         id={`${accommodation.id}`}
                         className="flex space-x-4  shadow-md  mt-2 ml-4"
                         onClick={() => {
                         }}
                       >
                         <img src={`${accommodation.image}`} onError={(e) => e.currentTarget.src = 'https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg'} className="w-1/2" alt="hotel" />
                         <div className="py-4">
                           <p className="text-xl font-normal text-gray-600 uppercase">{accommodation.name}</p>
                           <p className="text-sm font-thin text-gray-500">
                             Capacity:
                             {accommodation.capacity}
                           </p>
                           <p className="text-sm font-thin text-gray-500">
                             Available Rooms:
                             {accommodation.roomsLeft}
                           </p>
                           <p className="text-sm font-thin text-gray-500">
                             Cost:
                             {accommodation.cost}
                             {' '}
                             FRW
                           </p>
                           <Facilities facilities={accommodation.facilities} />
                         </div>
                       </div>
                     ))
                   ) : (
                     <p />
                   )

                }

          </div>
        </div>
        <div id="accommodationOpener" className={` ${(focusAccommodation.name !== undefined) ? '' : 'hidden'}`}>
          <div id="accommodationMain" className=" bg-gray-100  p-4 items-center flex space-x-2">
            <img src={`${focusAccommodation.image}`} onError={(e) => e.currentTarget.src = 'https://res.cloudinary.com/bn47/image/upload/v1609963683/sample.jpg'} className="w-1/2 h-full object-cover" alt="hotel" />
            <div className=" h-full flex-row space-y-1">
              <p className="text-2xl font-extrabold">Book This Accommodation Now</p>
              <p className=" mt-4 text-gray-500 grid grid-cols-2">
                <span className="font-normal text-black">Accommodation name: </span>
                {focusAccommodation.name}
              </p>
              <p className="text-gray-500 grid grid-cols-2">
                <span className="font-normal text-black ">Cost: </span>
                {focusAccommodation.cost}
              </p>
              <p className="text-gray-500 grid grid-cols-2">
                <span className="font-normal text-black">Available Rooms: </span>
                {focusAccommodation.roomsLeft}
              </p>
              <div className="grid grid-cols-2" >
              <p>Facilities</p>
              <Facilities facilities={focusAccommodation.facilities} />
              </div>


              <div className="grid grid-cols-2 w-full">
                <label htmlFor="checkin">Checkin Date</label>
                <ReactDatePicker id="checkin" className="bg-transparent p-0 text-gray-500 focus:outline-none" locale="es" selected={checkinDate} onChange={(date) => setCheckinDate(date)} />
              </div>

              <div className="grid grid-cols-2 space-y-0">
                <label htmlFor="checkout">Checkout Date</label>
                <ReactDatePicker id="checkout" className="bg-transparent p-0 text-gray-500 focus:outline-none" locale="es" selected={checkoutDate} onChange={(date) => setCheckoutDate(date)} />
              </div>
              <div>
                <p id="processor">Processing ... </p>
              </div>

              <div className=" mt-auto grid grid-cols-2 space-x-0.5 ">
                <button
                  className="bg-gray-100 text-xl text-blue-700 font-normal px-2 py-1 border-2 border-blue-700"
onClick={(e) => {
                      openAccommodationBook({ undefined });
                      document.getElementById('processor').innerHTML = 'Processing ...';
                      document.getElementById('processor').style.display = 'none';
                    }}
                >
                  CANCEL
                </button>
                <button
                  className="bg-blue-700 text-xl text-gray-100 font-normal px-2 py-1"
onClick={() => {
                      document.getElementById('processor').style.display = 'block';
                      BookThisAccommodation(focusAccommodation);
                    }}
                >
                  BOOK
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default BookAccommodation;
