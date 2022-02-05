import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from './TextError';

const SelectFormik = ({ label, name, options, required=true, ...rest }) => {

  return (
    <div className='form-control'>
        <label htmlFor={name}>
          {required ? <b style={{color: 'red'}}>* </b> : null }
          {label}
        </label>

        <FastField as='select' id={name} name={name} {...rest}>
          {
            options.map((option, ind) => (
              <option key={option.value} value={option.value} disabled={ind === 0}>{option.key}</option>
              ))
          }
          </FastField>

        <ErrorMessage name={name} component={TextError} />
    </div>
    );
};

export default SelectFormik;
