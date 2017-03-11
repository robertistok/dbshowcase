import { FETCH_TEACHERS } from '../actions/teacher';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TEACHERS:
      return action.payload;
    default:
      return state;
  }
}
