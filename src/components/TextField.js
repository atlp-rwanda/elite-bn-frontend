import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, onChange, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2  py-3 " htmlFor={field.name}>{label}</label>
      <input
        onChange={onChange}
        type="text"
        className="border border-black-50 rounded w-full text-gray-700 focus:outline-none   transition duration-500 pb-3 py-2 px-3"
        {...field}
        {...props}
        autoComplete="off"
      />
      <div className="text-red-500" id={`${label}error`}>
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};
