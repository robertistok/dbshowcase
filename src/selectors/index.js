import { createSelector } from 'reselect';

const getTeachers = (state) => state.teachers.all;
const getSelected = (state) => state.form.TeachersForm;

export const getSelectedTeacher = createSelector(
  [ getTeachers, getSelected], (teachers, selected) => {
    if (selected && selected.values && selected.values.selectedTeacher) {
      return teachers.filter(t => t._id === selected.values.selectedTeacher)[0];
    };
  }
);
