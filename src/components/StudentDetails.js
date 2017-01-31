import React, { Component } from 'react';

import GradesList from './GradesList';

export default class StudentDetails extends Component {
  componentDidMount() {
    this.props.getStudent(this.props.params.id);
  }

  render() {
    const { selectedStudent } = this.props;
    if (selectedStudent === undefined || selectedStudent.grades === undefined) return <h1>Loading</h1>
    return (
      <div>
        <h3>General info</h3>
        <ul className='list-group'>
          <li className='list-group-item'>{selectedStudent.firstname + ' ' + selectedStudent.lastname}</li>
          <li className='list-group-item'>{selectedStudent.email}</li>
          <li className='list-group-item'>{selectedStudent.gender}</li>
          <li className='list-group-item'>{selectedStudent.phone}</li>
          <li className='list-group-item'>{selectedStudent.dateOfBirth}</li>
          <li className='list-group-item'>{selectedStudent.bankAccount}</li>
        </ul>
        <h3>Grades</h3>
        <GradesList grades={selectedStudent.grades}/>
      </div>
    );
  }
}
