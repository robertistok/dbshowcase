import axios from 'axios';

export const FETCH_ONE_USER = 'FETCH_ONE_USER';
export const FETCH_PERFORMANCE = 'FETCH_PERFORMANCE';

const ROOT_URL = 'http://localhost:3010/api';

export function fetchStudent(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/students/${id}`)
      .then(({ data }) => {
        dispatch({ type: FETCH_ONE_USER, payload: data });
      });
  };
};

export function fetchPerformance() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/students`)
      .then(({ data }) => {
        dispatch({ type: FETCH_PERFORMANCE, payload: data });
      });
  };
};
