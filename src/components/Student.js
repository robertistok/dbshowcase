import React from 'react'

const Student = ({ student, index }) => {
  return (
    <tr key={index} onClick={() => console.log(student.id)}>
      <td>{index+1}</td>
      <td>{student.identificationNumber}</td>
      <td>{student.firstname}</td>
      <td>{student.lastname}</td>
      <td>{student.CNP}</td>
    </tr>
  );
}

export default Student;
