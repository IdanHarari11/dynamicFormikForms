import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from './TextError';

const InputFormik = ({ label, name, required=true, ...rest }) => {

    return (
        <div className='form-control'>
            <label htmlFor={name}>
                {required ? <b style={{color: 'red'}}>* </b> : null } 
                {label}
            </label>
            
            <FastField id={name} name={name} {...rest} style={{width: 350, lineHeight: '1.4375em'}} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default InputFormik;
