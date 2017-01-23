import React, { Component } from 'react';

export default class GroupDetails extends Component {
  componentDidMount() {
    this.props.getDetailedGroup(this.props.params.id);
  }

  renderTable(student, i) {
    return (
      <tr key={i} onClick={() => console.log(student.id)}>
        <td>{i+1}</td>
        <td>{student.identificationNumber}</td>
        <td>{student.firstname}</td>
        <td>{student.lastname}</td>
        <td>{student.CNP}</td>
      </tr>
    )
  }

  render() {
    const { selectedGroup } = this.props;
    if (selectedGroup.students === undefined) return <h1>Loading</h1>
    return (
      <div className='container'>
        <h2>Students for group {this.props.selectedGroup.id}</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Nr.</th>
              <th>Identification Number</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>CNP</th>
            </tr>
          </thead>
          <tbody>
            {selectedGroup.students.map((student, i) => this.renderTable(student, i))}
          </tbody>
        </table>
      </div>
    )
  }
}
