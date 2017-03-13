import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Teachers from '../components/Teachers';
import * as teacherActions from '../actions/teacher';
import * as modalActions from '../actions/modals';


class TeachersContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeachers();
  }

  handleSubmit(e) {
    console.log(e);
  }

  render() {
    return (
      <Teachers {...this.props} onSubmit={this.handleSubmit} changeTeacher={this.changeTeacher} />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...teacherActions,
    ...modalActions
  }, dispatch);
}

const mapStateToProps = state => {
  return {
    teachers: state.teachers.all,
    selectedTeacher: state.teachers.selected,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersContainer);
