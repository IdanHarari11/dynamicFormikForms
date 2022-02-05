import React from 'react';
import CheckboxGrpFormik from './CheckboxGrpFormik';
import DatePickerFormik from './DatePickerFormik';
import InputFormik from './InputFormik';
import RadioBtnsFormik from './RadioBtnsFormik';
import SelectFormik from './SelectFormik';
import TextAreaFormik from './TextAreaFormik';


const FormikControl = ({ control, ...rest }) => {

    switch (control) {
        case 'input':
            return <InputFormik {...rest} />;
        case 'textarea':
            return <TextAreaFormik {...rest} />;
        case 'select':
            return <SelectFormik {...rest} />;
        case 'radio':
            return <RadioBtnsFormik {...rest} />;
        case 'checkbox':
            return <CheckboxGrpFormik {...rest} />;
        case 'date':
                return <DatePickerFormik {...rest} />;
    
        default:
            return <InputFormik {...rest} />;
    }

  return (
    <div>
        
    </div>
  );
};

export default FormikControl;
