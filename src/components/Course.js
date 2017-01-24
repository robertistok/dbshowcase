import React from 'react';

const Course = ({ course, index }) => {
  return(
    <tr key={index}>
      <td>{course.code}</td>
      <td>{course.name}</td>
      <td>{course.year}/{course.semester}</td>
      <td>{course.credits}</td>
    </tr>
  )
}

export default Course;
