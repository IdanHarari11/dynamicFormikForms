import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'ROption 1', value: 'Roption1' },
        { key: 'ROption 2', value: 'Roption2' },
        { key: 'ROption 3', value: 'Roption3' },
    ]
    const radioOptions = [
        { key: 'ROption 1', value: 'Roption1' },
        { key: 'ROption 2', value: 'Roption2' },
        { key: 'ROption 3', value: 'Roption3' },
    ]
    const checkboxOptions = [
        { key: 'CBOption 1', value: 'CBoption1' },
        { key: 'CBOption 2', value: 'CBoption2' },
        { key: 'CBOption 3', value: 'CBoption3' },
    ]

    // control options: [input, textarea, select, radio]
    const inputsBuilder = [
        { name: 'fullName', label: 'שם מלא:', type: 'text', control: 'input', placeholder: 'שם מלא', disabled: false, validation: Yup.string().required('Required!')},
        { name: 'phoneNumber', label: 'מספר טלפון:', type: 'text', control: 'input', placeholder: 'מספר טלפון', disabled: false, validation: Yup.number().typeError('נא להזין מספרים בלבד').min(0).required('Required!')},
        { name: 'email', label: 'כתובת מייל לקבלת התראות:', type: 'email', control: 'input', placeholder: 'כתובת מייל לקבלת התראות', disabled: false, validation: Yup.string().email('Invalid email format').required('Required!')},
        { name: 'projectName', label: 'שם הפרויקט:', type: 'text', control: 'input', placeholder: 'שם הפרויקט (מבולמ"ס)', disabled: false, validation: Yup.string().required('Required!')},
        { name: 'description', label: 'תיאור קצר של הפרויקט:', type: 'text', control: 'input', placeholder: 'תיאור קצר של הפרויקט', disabled: false, isTextArea: true ,required: false, validation: Yup.string()},
        { name: 'FinOpsName', label: 'שם מוביל FinOps:', type: 'text', control: 'input', placeholder: 'במידה ולא קיים, מנהל הפרויקט הינו מוביל ה-FinOps', disabled: false, required: false, validation: Yup.string()},
        { name: 'FinOpsEmail', label: 'אימייל מוביל FinOps:', type: 'text', control: 'input', placeholder: 'במידה ולא קיים, אימייל הינו אימייל של מנהל הפרויקט', disabled: false, required: false, validation: Yup.string().email('Invalid email format')},
        // { name: 'selectOption', label: 'Select A Topic', type: 'text', control: 'select', options: dropdownOptions, validation: Yup.string().required('Required!')},
        // { name: 'radioOption', label: 'Radio Topic',  control: 'radio', options: radioOptions, validation: Yup.string().required('Required!')},
        // { name: 'checkboxOption', label: 'Checkbox Topic',  control: 'checkbox', options: checkboxOptions, validation: Yup.array().required('Required!')},
        // { name: 'datePicker', label: 'Date Picker', control: 'date', validation: Yup.date().required('Required!').nullable()},
    ]

    const initialValues = { };
    
    const validationSchema = Yup.object({ });
    
    // Build the form by inputsBuilder array
    inputsBuilder.map((input) => {
        switch (input.type) {
            case 'number':
                initialValues[input.name] = 0;
                break;
            case 'checkbox':
                initialValues[input.name] = [];
                break;
            case 'date':
                initialValues[input.name] = null;
                break;
                
            default:
                initialValues[input.name] = '';
                break;
        }
        validationSchema.fields[input.name] = input.validation;
        validationSchema._nodes.push(input.name);
    })
    
    const onSubmit = (values) => {
        console.log(values);
    }

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} >
        <Form>
            {inputsBuilder.map((input, key) => (
                <FormikControl 
                key={key} 
                name={input.name} 
                label={input.label} 
                type={input?.type} 
                control={input.control} 
                placeholder={input?.placeholder} 
                disabled={input?.disabled} 
                isTextArea={input?.isTextArea} 
                required={input?.required}
                options={input?.options} />
            ))}
            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  );
};

export default FormikContainer;