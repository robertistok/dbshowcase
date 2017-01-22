import { combineReducers } from 'redux';

import groupReducer from './reducer_groups';

const rootReducer = combineReducers({
  groups: groupReducer
});

export default rootReducer;
