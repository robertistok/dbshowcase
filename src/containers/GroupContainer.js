import React, { Component } from 'react';
import { connect } from 'react-redux';

import Group from '../components/Group';
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

export default connect(mapStateToProps, mapDispatchToProps)(Group);
