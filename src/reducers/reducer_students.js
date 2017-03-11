import { FETCH_ONE_USER, FETCH_PERFORMANCE } from '../actions/student';

const INITIAL_STATE = { selectedStudent: { }, perf: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ONE_USER:
      return { ...state, selectedStudent: action.payload }
    case FETCH_PERFORMANCE:
      return { ...state, perf: action.payload }
    default:
      return state;
  }
}
