import { connect } from 'react-redux';

import { fetchDetailedGroup } from '../actions/group';
import GroupDetails from '../components/GroupDetails';

const mapStateToProps = (state) => {
  return {
    selectedGroup: state.groups.selectedGroup
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailedGroup(id) {
      dispatch(fetchDetailedGroup(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
