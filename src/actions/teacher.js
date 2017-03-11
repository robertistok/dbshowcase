import axios from 'axios';

export const FETCH_TEACHERS = 'FETCH_TEACHERS';

const ROOT_URL = 'http://localhost:3010/api/teachers';

export function fetchTeachers() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getAll`)
      .then(({ data }) => {
        dispatch({ type: FETCH_TEACHERS, payload: data })
      });
  };
}
