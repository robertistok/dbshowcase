import { FETCH_TEACHERS, SELECT_TEACHER } from '../actions/teacher';

const INITIAL_STATE = { all: [], selected: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TEACHERS:
      return { ...state, all: action.payload };
    case SELECT_TEACHER:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
