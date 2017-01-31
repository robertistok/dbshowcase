import React from 'react';
import { connect } from 'react-redux';

import StudentDetails from '../components/StudentDetails';
import { fetchStudent } from '../actions/student';

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.students.selectedStudent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudent(id) {
      dispatch(fetchStudent(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
