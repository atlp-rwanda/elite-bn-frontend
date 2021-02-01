import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    
    return (
        <div>
            <label  className="block text-gray-700 text-sm font-bold mb-2 ml-3"  htmlFor={field.name}>{label}</label>
            <input type="text"  className="border border-black-50 rounded w-full text-gray-700 focus:outline-none   transition duration-500 px-3 pb-3"
            {...field} {...props}
            autoComplete="off"
            />
            <div className="text-red-500">
            <ErrorMessage name={field.name}/>
            </div>
        </div>
    )
}