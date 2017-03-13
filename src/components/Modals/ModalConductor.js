import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/modals';

import AddTeachingModal from './AddTeachingModal';

const ModalConductor = (props) => {
  switch (props.modal.currentModal) {
    case 'ADD_TEACHING':
      return <AddTeachingModal {...props} />;
    default:
      return null;
  };
};

export default connect(state => state, actions)(ModalConductor);
