import React from 'react';
import styled from 'styled-components';

import Course from './Course';

const CoursesTable = ({ courses }) => {
  return(
    <table className='table'>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Year/Semester</th>
          <th>Credits</th>
        </tr>
      </thead>
      <tbody>
        { courses.map((course, i) => <Course course={course} key={i} index={i} />) }
      </tbody>
    </table>
  )
}

export default CoursesTable;
