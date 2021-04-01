/* eslint-disable */
import React from 'react'
const Facilities = ({ facilities }) =>{
    let facs = [];
   try{
    for(let fac of facilities){
        facs.push(<p key={`${fac.toString()+ Math.random()}`} id={`${fac.toString()+ Math.random()}`} className="text-lg font-thin text-gray-500">{fac}</p>)
    }
   }catch(e){

   }
    return (
        <div className="border-l  border-gray-500 px-2">
        {facs}
        </div>
    )
}
export default Facilities;