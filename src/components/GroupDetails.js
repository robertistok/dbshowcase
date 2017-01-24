import React, { Component } from 'react';

import StudentsTable from './StudentsTable';
import CoursesTable from './CoursesTable';

export default class GroupDetails extends Component {
  componentDidMount() {
    this.props.getDetailedGroup(this.props.params.id);
  }

  render() {
    const { students, courses } = this.props.selectedGroup;
    if (students === undefined) return <h1>Loading</h1>
    return (
      <div className='container'>
        <h2>Details for group {this.props.selectedGroup.id}</h2>
        <StudentsTable students={students} />
        <h2>Courses</h2>
        <CoursesTable courses={courses} />
      </div>
    )
  }
}
