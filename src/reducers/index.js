import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import groupReducer from './reducer_groups';
import studentReducer from './reducer_students';
import teacherReducer from './reducer_teachers';

const rootReducer = combineReducers({
  groups: groupReducer,
  students: studentReducer,
  teachers: teacherReducer,
  form: formReducer
});

export default rootReducer;
