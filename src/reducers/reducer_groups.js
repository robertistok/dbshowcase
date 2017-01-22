import { FETCH_GROUPS } from '../actions/group';

const INITIAL_STATE = { groups: [], selectedGroup: { } }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_GROUPS:
      return { ...state, groups: action.payload };
    default:
      return state;
  };
};
