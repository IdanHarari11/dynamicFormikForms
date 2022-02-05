import { ErrorMessage, FastField } from 'formik';
import DataView from 'react-datepicker'
import React from 'react';
import TextError from './TextError';

const DatePickerFormik = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <FastField name={name}>
            {
                ({ form, field }) => {
                    const { setFieldValue } = form
                    const { value } = field

                    return <DataView id={name} {...field} {...rest} selected={value} onChange={(val)=>setFieldValue(name, val)} />
                }
            }
        </FastField>
        <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePickerFormik;
