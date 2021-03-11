import React from 'react'
import PropTypes from 'prop-types'
import Image from '../../../assets/images/accomodationImage.png';
import { IoLocationSharp } from 'react-icons/io5';
import { GrMoney } from 'react-icons/gr';

const AccomComponent = props => {

  return (

    <div class="flex w-11/12 md:w-full gap-2 mt-5 justify-start flex-col md:flex-row items-center md:items-start flex-wrap ">

      <div class="flex-auto w-11/12 md:max-w-xl md:max-h-56 space-x-2 p-2 flex justify-center items-start md:items-start flex-col md:flex-row shadow rounded-sm bg-white ml-1 ">

        <img src={Image} className="w-full max-h-60  md:w-2/5 md:max-h-52 border-2 border-cool-back-color" />
        <div className=" w-full md:w-3/5 md:max-h-52 ">
          <div className="block">
            <label className="font-semibold text-gray-700">Selena Hotel</label>
            <ul className="text-sm space-y-2   text-gray-600">
              <li><label className="">Book by January 31 to save up to 25% on stays until August 31. Join Radisson Rewards to unlock the full discount. Enjoy restaurant discounts.  </label></li>

              <li ><label className="flex space-x-2"> <h2 className="text-sm font-medium   text-gray-500">Facilities:</h2> <span>Bar, Swimming pool</span></label></li>
              <li ><label className="flex space-x-2"><IoLocationSharp /> <span>Rusizi,kamembe</span></label></li>
              <li><label className="flex space-x-2"><GrMoney /><span>5000 frw</span> </label></li>
            </ul>
          </div>
        </div>
      </div>

    </div>

  )
}

AccomComponent.propTypes = {

}

export default AccomComponent
