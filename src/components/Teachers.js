import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)} />
)

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom} />
)

const renderTeachersItems = (teachers) => {
  return teachers.map(teacher => (
    <MenuItem
      key={teacher._id}
      value={teacher._id}
      primaryText={teacher.firstname + teacher.lastname}/>
  ));
}

const Teachers = ({ handleSubmit, teachers }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='selectedTeacher' component={renderSelectField} label='Select a teacher'>
          {teachers.length !== 0 && renderTeachersItems(teachers)}
        </Field>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
};

export default reduxForm({
  form: 'CreateTeachersForm'
})(Teachers);
