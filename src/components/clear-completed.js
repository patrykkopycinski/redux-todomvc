import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

const ClearCompleted = ({ DELETE_COMPLETED_TODOS }) => {
  return (
    <button
      className="clear-completed"
      onClick={DELETE_COMPLETED_TODOS}
    >
      Clear completed
    </button>
  )  
};

export default connect(null, actions)(ClearCompleted);