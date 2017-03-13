import axios from 'axios';
import qs from 'qs';

export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export const SELECT_TEACHER = 'SELECT_TEACHER';

const ROOT_URL = 'http://localhost:3010/api/teachers';

export function fetchTeachers() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getAll`)
      .then(({ data }) => {
        dispatch({ type: FETCH_TEACHERS, payload: data })
      });
  };
}

export function selectTeacher(id) {
  return {
    type: SELECT_TEACHER,
    payload: id
  };
};

export function assignTeachingToTeacher(id, data) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/assignteaching`, qs.stringify({
      id,
      data
    }))
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
}
