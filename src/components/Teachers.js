import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderSelectField } from '../utils/formFields'
import PersonDetails from './PersonDetails';
import PersonMenuItems from './PersonMenuItems';
import Teachings from './Teachings';

const Teachers = (props) => {
  const {teachers, selectedTeacher, handleSubmit, initialize, selectTeacher } = props;

  const changeTeacher = (teacher) => {
    selectTeacher(teacher);
    initialize(teacher);
  }

  return (
    <div>
      <div>
        <Field name='selectedTeacher' component={renderSelectField} label='Select a teacher' onChange={changeTeacher}>
          {teachers.length !== 0 && PersonMenuItems(teachers)}
        </Field>
      </div>

      <form onSubmit={handleSubmit}>
        {selectedTeacher && <PersonDetails />}
      </form>

      <div>
        {selectedTeacher && <Teachings {...props} teacher={selectedTeacher}/>}
      </div>

    </div>
  )
}

export default reduxForm({
  form: 'TeachersForm'
})(Teachers);
