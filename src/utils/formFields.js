import React from 'react';
import TextField from 'material-ui/TextField';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';

export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

export const renderPasswordField = ({ input, label, meta: { touched, error}, ...custom }) => (
  <TextField
    floatingLabelText={label}
    errorText={touched && error}
    type='password'
    {...input}
    {...custom} />
)

export const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)} />
)

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom} />
)

export const renderDatePicker = ({ input, label, meta: { touched,error } }) => {
  return <DatePicker {...input}
    value={new Date(input.value)}
    hintText={label}
    mode='landscape' />
}
