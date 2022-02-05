import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from './TextError';

const TextAreaFormik = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <FastField as='textarea' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextAreaFormik;
