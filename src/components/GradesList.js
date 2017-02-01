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

  showGradesNumber() {
    let total = this.props.grades.reduce((sum, item, index) => {
      const { grade } = item;
      if (grade in sum) {
        sum[grade] += 1;
      } else {
        sum[grade] = 1;
      }
      return sum;
    }, {})
    console.log(total);
    return (
      <div className='col-md-3'>
        {
          Object.keys(total).map((i) => {
            return (
              <div className="alert alert-info">
                It has <strong>{total[i]}</strong> grades of {i}
              </div>
            )
          })
        }
      </div>
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
        <div className='col-md-3'>
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

        <div className='col-md-6'>
          {this.props.grades && this.renderGrade.bind(this)()}
        </div>

        {this.props.grades && this.showGradesNumber.bind(this)()}
      </div>

    )
  }
}
