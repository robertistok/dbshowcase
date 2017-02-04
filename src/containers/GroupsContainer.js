import { connect } from 'react-redux';

import Groups from '../components/Groups';
import { fetchGroups } from '../actions/group';
import { fetchPerformance } from '../actions/student';

const mapStateToProps = (state) => {
  return {
    group: state.groups,
    perf: state.students.perf
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGroups() {
      dispatch(fetchGroups());
    },

    getStudentsPerformance() {
      dispatch(fetchPerformance());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
