import axios from 'axios';

export const FETCH_GROUPS = 'FETCH GROUPS';
export const FETCH_DETAILED_GROUP = 'FETCH_DETAILED_GROUP';

const ROOT_URL = 'http://localhost:3010/api';

export function fetchGroups() {
  return dispatch => {
    axios.get(`${ROOT_URL}/groups`)
      .then(({ data }) => {
        dispatch({ type: FETCH_GROUPS, payload: data });
      });
  };
}

export function fetchDetailedGroup(id) {
  return dispatch => {
    axios.get(`${ROOT_URL}/groups/${id}`)
      .then(({ data }) => {
        dispatch({ type: FETCH_DETAILED_GROUP, payload: data });
      });
  };
}
