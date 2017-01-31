import { combineReducers } from 'redux';

import groupReducer from './reducer_groups';
import studentReducer from './reducer_students';

const rootReducer = combineReducers({
  groups: groupReducer,
  students: studentReducer
});

export default rootReducer;
