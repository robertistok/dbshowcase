import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Group extends Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  renderTable(group, i) {
    return (
      <tr key={i} onClick={() => console.log(group.id)}>
        <td><Link to={`/group/${group.id}`}>{group.id}</Link></td>
        <td>{group.startYear}</td>
        <td>{group.avarageBirthYear}</td>
        <td>{group.students.length}</td>
      </tr>
    )
  }

  render() {

    if (this.props.group.groups.length === 0) return <div>Loading</div>
    return (
      <div className='container'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Start Year</th>
              <th>Average Birthyear</th>
              <th>Num of students</th>
            </tr>
          </thead>
          <tbody>
            {this.props.group.groups.map((group, i) => this.renderTable(group, i))}
          </tbody>
        </table>
      </div>
    )
  }
}
