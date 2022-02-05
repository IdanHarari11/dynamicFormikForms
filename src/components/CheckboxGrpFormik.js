import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import TextError from './TextError';

const CheckboxGrpFormik = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-control'>
        <label>{label}</label>
        <FastField name={name} {...rest}>
            {
                ({ field }) => {
                    return options.map((option) => (
                        <React.Fragment key={option.key}>
                            <input type='checkbox' id={option.value} {...field} value={option.value} checked={field.value.includes(option.value)} />
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

export default CheckboxGrpFormik;
