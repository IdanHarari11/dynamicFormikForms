# Dynadmic Formik Forms

# Preview:
With these components you can build as large a form as you want, easily and quickly.
Using one line of code you can build input with the formik capabilities and thus optimize the time of creating the form and do so in a short and understandable code!
All types of inputs are available and available to use.

# How to use:
The "InputsBuilder" (array of objects) is located in the "FormikContainer" component;
With the "InputsBuilder" you can build the form by adding new object and depending on the keys you will create a new input to your form; 

- keys: 
    required keys - 
        text input: name(: string), label(: string), control(: string)
        select/radio/checkbox input: name(: string), label(: string), control(: string), options(: array of objects)
    
    optional keys - type(: string), placeholder(: string), disabled(: boolean), validation(: string)

    **keys descriptions:**
        name: the'name' attribute for the input and for label 'htmlFor' value, **the formik name control**;
        label: label text before the input;
        type: input type (text, number, email);
        control: input type (input, textarea, select, radio, checkbox, date);
        placeholder: input placeholder;
        disabled: input disabled (false is the defualt);
        validation: input validation (can use Yup library);
        
        (Can you add more attributes that goes in to the input attributes by defualt)
