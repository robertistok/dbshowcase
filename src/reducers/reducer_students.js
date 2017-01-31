import { FETCH_ONE_USER } from '../actions/student';

const INITIAL_STATE = { selectedStudent: { } };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ONE_USER:
      return { ...state, selectedStudent: action.payload}
    default:
      return state;
  }
}
