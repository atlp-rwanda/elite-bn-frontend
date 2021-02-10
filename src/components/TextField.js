import React from 'react';


export const TextField = ({ label, changeValue,name,placeholder,...props }) => {
 
  return (
    <div className="px-8 py-5">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2  py-3 "></label> */}
      <input
        onChange={changeValue}
        type="text"
        className="rounded w-full text-gray-700 border border-gray-100 py-2  px-3  spacey-3 border border-gray-100"
        name={name}
        placeholder={placeholder}
        {...props}
        autoComplete="off"
      />
      <div className="text-red-500" id={`${label}error`}>
      </div>
    </div>
  );
};
