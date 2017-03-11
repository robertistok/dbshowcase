import React, { Component } from 'react';
import { connect } from 'react-redux';

import Teachers from '../components/Teachers';
import { fetchTeachers } from '../actions/teacher';

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

class TeachersContainer extends Component {
  componentDidMount() {
    this.props.fetchTeachers();
  }

  render() {
    return (
      <Teachers onSubmit={showResults} {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  return {
    teachers: state.teachers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTeachers() {
      dispatch(fetchTeachers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
