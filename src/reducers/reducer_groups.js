import { FETCH_GROUPS, FETCH_DETAILED_GROUP } from '../actions/group';

const INITIAL_STATE = { groups: [], selectedGroup: { } }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_GROUPS:
      return { ...state, groups: action.payload };
    case FETCH_DETAILED_GROUP:
      return { ...state, selectedGroup: action.payload };
    default:
      return state;
  };
};
