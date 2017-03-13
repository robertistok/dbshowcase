import React from 'react';
import MenuItem from 'material-ui/MenuItem';

const PersonMenuItems = (props) => {
  return props.map(person => (
    <MenuItem
      key={person._id}
      value={person}
      primaryText={person.firstname + ' ' + person.lastname}/>
  ));
}

export default PersonMenuItems;
