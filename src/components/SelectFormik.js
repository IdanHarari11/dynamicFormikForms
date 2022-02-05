import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from './TextError';

const SelectFormik = ({ label, name, required, ...rest }) => {

  return (
    <div className='form-control'>
        <label htmlFor={name}>
          {required ? <b style={{color: 'red'}}>* </b> : null }
          {label}
        </label>
        <FastField as='select' id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError} />
    </div>
    );
};

export default SelectFormik;
