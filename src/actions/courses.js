import axios from 'axios';

export const FETCH_COURSES = 'FETCH_COURSES';

const ROOT_URL = 'http://localhost:3010/api/courses';

export function fetchCourses() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getall`)
      .then(({ data }) => {
        dispatch({ type: FETCH_COURSES, payload: data });
      })
  }
}
