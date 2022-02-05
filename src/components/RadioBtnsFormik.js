import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import TextError from './TextError';

const RadioBtnsFormik = ({ label, name, options, required=true, ...rest }) => {
  return (
    <div className='form-control'>
        <label>
            {required ? <b style={{color: 'red'}}>* </b> : null }
            {label}
        </label>
        <FastField name={name} {...rest}>
            {
                ({ field }) => {
                    return options.map((option) => (
                        <React.Fragment key={option.key}>
                            <input type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                            <label htmlFor={option.value}>{option.key}</label>
                        </React.Fragment>
                    ))
                }
            }
        </FastField>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  );
};

export default RadioBtnsFormik;
