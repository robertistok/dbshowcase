import React from 'react';

import Student from './Student';

const StudentsTable = ({ students }) => {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Nr.</th>
          <th>Identification Number</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>CNP</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, i) => <Student student={student} index={i} key={i} />)}
      </tbody>
    </table>
  )
}

export default StudentsTable;
