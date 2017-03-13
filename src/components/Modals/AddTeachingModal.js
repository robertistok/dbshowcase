import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

import ModalWrapper from './ModalWrapper';
import renderSelectField from '../../utils/formFields';
import * as coursesActions from '../../actions/courses';
import * as teacherActions from '../../actions/teacher';

const MenuItems = (props) => {
  return props.map(course => (
    <MenuItem
      key={course.id}
      value={course}
      primaryText={course.name} />
  ));
}

const TypesCheckboxes = (props) => {

}

class AddTeachingModal extends Component {
  constructor(props) {
    super(props);

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.renderCheckBoxes = this.renderCheckBoxes.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleOkClick = this.handleOkClick.bind(this);

    this.state = {
      selected: null,
      types: {
        lecture: false,
        lab: false,
        seminar: false,
        project: false
      }
    }
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  handleSelectChange(event, index, value) {
    this.setState({ selected: value })
    console.log(this.state.selected)
  }

  handleCheck(event, value) {
    let newTypes = this.state.types;
    newTypes[event.target.name] = value;
    this.setState({ types: newTypes })
  }

  handleOkClick() {
    const { assignTeachingToTeacher, selectedTeacher } = this.props;
    assignTeachingToTeacher(selectedTeacher._id, this.state);
  }

  renderCheckBoxes(types) {
    return Object.keys(types).map(type => {
      if (types[type]) return (
        <Checkbox
          label={type}
          name={type}
          value={this.state.types[type]}
          checked={this.state.types[type]}
          onCheck={this.handleCheck}/>
      )
    });
  }

  render() {
    return (
      <ModalWrapper
        { ...this.props }
        title='Add Teaching'
        onOk={this.handleOkClick}
      >
        <div>
          <SelectField
            onChange={this.handleSelectChange}
            floatingLabelText='Select a Course'
            value={this.state.selected}
          >
            {this.props.allCourses && MenuItems(this.props.allCourses)}
          </SelectField>
          {this.state.selected !== null && this.renderCheckBoxes(this.state.selected.teachingTypes)}
        </div>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allCourses: state.courses.all,
    selectedTeacher: state.teachers.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...teacherActions,
    ...coursesActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTeachingModal);
