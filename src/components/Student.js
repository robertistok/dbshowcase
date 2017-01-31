import React from 'react';
import { Link } from 'react-router'

const Student = ({ student, index }) => {
  return (
    <tr key={index} onClick={() => console.log(student.id)}>
      <td>{index+1}</td>
      <td><Link to={`/student/${student.identificationNumber}`}>{student.identificationNumber}</Link></td>
      <td>{student.firstname}</td>
      <td>{student.lastname}</td>
      <td>{student.CNP}</td>
    </tr>
  );
}

export default Student;
