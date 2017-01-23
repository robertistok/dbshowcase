import { connect } from 'react-redux';

import Groups from '../components/Groups';
import { fetchGroups } from '../actions/group';

const mapStateToProps = (state) => {
  return {
    group: state.groups
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroups() {
      dispatch(fetchGroups());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
