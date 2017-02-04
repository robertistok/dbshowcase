import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import GpaChart from './GpaChart';

const Div=styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-top: 2%;

  .group {
    width: 45%;
    align-self: flex-start;
  }

  .chart {
    align-self: baseline;
    width: 55%;
    height: 50%;
  }
`

export default class Group extends Component {
  componentDidMount() {
    this.props.fetchGroups();
    this.props.getStudentsPerformance();
  }

  renderRow(group, i) {
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
      <Div>
        <div className='group'>
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
              {this.props.group.groups.map((group, i) => this.renderRow(group, i))}
            </tbody>
          </table>
        </div>
        {this.props.perf ? <GpaChart data={this.props.perf}/> : <div>Loading chart...</div>}
      </Div>
    )
  }
}
