import React from 'react';
import { Field } from 'redux-form';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton } from 'material-ui/RadioButton';

import { renderTextField, renderRadioGroup, renderPasswordField, renderDatePicker } from '../utils/formFields';


const PersonDetails = (props) => {
  return (
    <div>
      <h4>Details</h4>
      <div>
        <Field name='identificationNumber' component={renderTextField} label='ID Number'/>
      </div>
      <div>
        <Field name='CNP' component={renderTextField} label='CNP'/>
      </div>
      <div>
        <Field name='gender' component={renderRadioGroup} >
          <RadioButton value='male' label='Male' />
          <RadioButton value='female' label='Female' />
        </Field>
      </div>
      <div>
        <Field name='firstname' component={renderTextField} label='First Name'/>
        <Field name='lastname' component={renderTextField} label='Last Name'/>
      </div>
      <div>
        <Field name='username' component={renderTextField} label='Username'/>
      </div>
      <div>
        <Field name='password' component={renderPasswordField} label='Password'/>
        <Field name='password' component={renderPasswordField} label='Confirm Password'/>
      </div>
      <div>
        <Field name='email' component={renderTextField} label='E-mail'/>
        <Field name='phone' component={renderTextField} label='Phone Number'/>
      </div>
      <div>
        <FlatButton label='Update' primary={true} type='submit'/>
      </div>
    </div>
  )
}

export default PersonDetails;
