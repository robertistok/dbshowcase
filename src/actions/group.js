import axios from 'axios';

export const FETCH_GROUPS = "FETCH GROUPS";

const ROOT_URL = 'http://localhost:3010/api'

export function fetchGroups() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/groups`)
      .then(({ data }) => {
        dispatch({ type: FETCH_GROUPS, payload: data });
      });
  };
}
