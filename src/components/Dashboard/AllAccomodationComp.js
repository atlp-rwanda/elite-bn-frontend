import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'

import { IoLocationSharp } from 'react-icons/io5';
import { GrMoney } from 'react-icons/gr';

import { connect } from 'react-redux';
import { getAccomodations } from '../../store/actions/AccomodationAction'

const AllAccomodationComp = ({ accomodations, getAccomodations }) => {

  useEffect(() => {
    getAccomodations();

  }, [getAccomodations]);

  console.log(accomodations)

  const accomodationArray = accomodations.map(accomodation => (


    <div className="flex-auto w-11/12 md:max-w-xl md:max-h-56 space-x-2 p-2 flex justify-center items-start md:items-start flex-col md:flex-row shadow rounded-sm bg-white ml-1 ">

      <img src={accomodation.image} className="w-full max-h-60  md:w-2/5 md:max-h-52 border-2 border-cool-back-color" />
      <div className=" w-full md:w-3/5 md:max-h-52 ">
        <div className="block">
          <label className="font-semibold text-gray-700">  {accomodation.name}</label>
          <ul className="text-sm space-y-2   text-gray-600">
            <li><label className=""> {accomodation.description} </label></li>
            <li ><label className="flex space-x-2"><IoLocationSharp /> <span>Rusizi,kamembe</span></label></li>
            <li><label className="flex space-x-2"><GrMoney /><span> {accomodation.cost} </span> </label></li>
          </ul>
        </div>
      </div>
    </div>
  ))

  return (

    <Fragment>
      <div className="flex w-11/12 md:w-full gap-2 mt-5 justify-start flex-col md:flex-row items-center md:items-start flex-wrap ">
        {accomodationArray}
      </div>
    </Fragment>

  )
}

AllAccomodationComp.propTypes = {
  getAccomodations: PropTypes.func.isRequired,
  accomodations: PropTypes.array.isRequired,

}

export const mapStateToProps = state => ({
  accomodations: state.accommodationsData.accomodations
});

export default connect(mapStateToProps, { getAccomodations })(AllAccomodationComp);
