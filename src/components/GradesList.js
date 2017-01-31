import React, { Component } from 'react';

export default class GradesList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedGrade: this.props.grades[0] };
  }

  renderList(grade, index) {
    return <option key={index}>{grade.course.name}</option>
  }

  renderGrade() {
    const { selectedGrade } = this.state;
    return (
      <ul className='list-group'>
        <li className='list-group-item'>{selectedGrade.grade}</li>
        <li className='list-group-item'>{selectedGrade.assignor}</li>
        <li className='list-group-item'>{selectedGrade.enteredOn}</li>
      </ul>
    )
  }

  handleChange(event) {
    const grade = this.props.grades.filter(g => g.course.name == event.target.value);
    console.log(grade);
    this.setState({ selectedGrade: grade[0]})
  }

  render() {
    const { grades } = this.props;
    return (
      <div className='row'>
        <div className='col-md-4'>
          <div className='form-group'>
            <select className='form-control'
                value={this.state.selectedGrade.course.name}
                id='gradesList'
                onChange={this.handleChange.bind(this)}>
              { grades
                  .sort((a, b) => a.course.code - b.course.code)
                  .map(this.renderList)
              }
            </select>
          </div>
        </div>
        <div className='col-md-8'>
          {this.props.grades && this.renderGrade.bind(this)()}
        </div>
      </div>

    )
  }
}
