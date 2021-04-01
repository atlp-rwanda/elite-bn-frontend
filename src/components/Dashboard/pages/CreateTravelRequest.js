/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import { logoutActionCreator } from '../../../store/actions/LogoutAction';
import { fetchUserInfo } from '../../../store/actions/profileAction';
import Footer from '../Footer';
import NavBar from '../NavBar';
import SideBar from '../Sidebar';
import TravelImage from '../../../images/travelImage.jpg';
import { TRIP_CREATE_FAIL } from '../../../constants/tripConstants';

const CreateTravelRequest = ({
  userData,
  GetUserProfile,
  LogoutAction,
  Logout,
}) => {
  const [trip, setTrip] = useState({
    orgin: '',
    reason: '',
    destination: '',
    accomodation: '',
    type: '',
    travelDate: null,
    returnDate: null,
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const {
      orgin,
      reason,
      type,
      destination,
      travelDate,
      accomodation,
      returnDate,
    } = trip;

    const newTrip = {
      orgin,
      reason,
      type,
      destination,
      travelDate,
      returnDate,
      accomodation,
    };

    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', newTrip);
    axios
      .post('https://elite-staging.herokuapp.com/api/v1/trips', newTrip)
      .then((res) => {
        dispatch({
          type: 'TRIP_CREATE_SUCCESS',
          payload: res,
        });
      })
      .catch((error) => {
        dispatch({ type: TRIP_CREATE_FAIL, payload: error });
      });
  };

  useEffect(() => {
    GetUserProfile();
  }, []);

  return (
    <div className="bg-gray-100 grid grid-cols-12  grid-rows-mdScreen md:grid-rows-layout  ">
      <NavBar userData={userData} LogoutAction={LogoutAction} Logout={Logout} />
      <SideBar />
      <div className="col-start-3 min-h-screen  row-start-2  col-end-13 p-4 md:p-12">
        <div className="flex">
          <div className="w-full">
            <form
              className="flex bg-gray-100 justify-center"
              onSubmit={submitHandler}
            >
              <div className="bg-gray-200 rounded-lg w-2/3">
                <div className="flex flex-col  mx-10 pt-5">
                  <label>From</label>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setTrip({ ...trip, orgin: e.target.value });
                    }}
                    type="text"
                    className="bg-gray-100 w-auto py-2 px-2 box-border rounded-lg mt-2"
                    placeholder="orgin place"
                  />
                </div>
                <div className="flex flex-col px-10 pt-5">
                  <label>To</label>
                  <select
                    className="bg-gray-100 w-auto py-2 px-10  rounded-lg mt-2"
                    onChange={(e) => {
                      e.preventDefault();
                      setTrip({ ...trip, destination: +e.target.value });
                    }}
                  >
                    <option />
                    <option value={10000}>Kigali</option>
                    <option value={30000}>Gisenyi</option>
                    <option value={20000}>Musanze</option>
                  </select>
                </div>
                <div className="flex flex-col px-10 pt-5">
                  <label>Accomodation</label>
                  <select
                    className="bg-gray-100 py-2 px-10 rounded-lg mt-2"
                    onChange={(e) => {
                      e.preventDefault();
                      setTrip({ ...trip, accomodation: +e.target.value });
                    }}
                  >
                    <option />
                    <option value={0}>Selena</option>
                    <option values={1}>Mariot</option>
                    <option value={4}>Rhadisson</option>
                  </select>
                </div>
                <div className="flex flex-col px-10 pt-5">
                  <label>Reason</label>
                  <select
                    className="bg-gray-100 py-2 px-10 rounded-lg mt-2"
                    onChange={(e) => {
                      e.preventDefault();
                      setTrip({ ...trip, reason: e.target.value });
                    }}
                  >
                    <option />
                    <option>Exhibitions</option>
                    <option>Conferences</option>
                    <option>Corporate</option>
                    <option>Incentive </option>
                  </select>
                </div>
                <div className="flex flex-col py-2 px-10 pt-5">
                  <label>Type</label>
                  <select
                    className="bg-gray-100 py-2 px-10 rounded-lg mt-2"
                    onChange={(e) => {
                      e.preventDefault();
                      setTrip({ ...trip, type: e.target.value });
                    }}
                  >
                    <option />
                    <option>one way</option>
                    <option>two way</option>
                  </select>
                </div>
                <div className="flex flex-col  mx-10 pt-5">
                  <label>Travel Date</label>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setTrip({ ...trip, travelDate: e.target.value });
                    }}
                    type="date"
                    className="bg-gray-100 px-10 py-2 rounded-lg mt-2"
                    placeholder="orgin place"
                  />
                </div>
                <div className="flex flex-col  mx-10 pt-5">
                  <label>Return Date</label>
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setTrip({ ...trip, returnDate: e.target.value });
                    }}
                    type="date"
                    className="bg-gray-100 px-10 py-2 rounded-lg mt-2"
                    placeholder="orgin place"
                  />
                </div>
                <div className="flex flex-col  mx-10 pt-5">
                  <button
                    className="my-10 text-white w-full  px-10 py-2 bg-blue-600 border-blue-600 border-2"
                    type="submit"
                  >
                    Create Trip
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" w-full border-2">
            <img className="h-full" src={TravelImage} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export const mapStateToProps = (state) => ({
  Logout: state.user,
  userData: state.userProfile.userData,
});

export const mapDispatchToProps = (dispatch) => ({
  GetUserProfile: () => dispatch(fetchUserInfo()),
  LogoutAction: () => dispatch(logoutActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTravelRequest);
