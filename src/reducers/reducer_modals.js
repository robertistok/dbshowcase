import { CHANGE_CURRENT_MODAL, HIDE_MODAL } from '../actions/modals';

const INITIAL_STATE = { currentModal: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_CURRENT_MODAL:
      return { ...state, currentModal: action.payload };
    case HIDE_MODAL:
      return { ...state, currentModal: null }
    default:
      return state;
  }
}
