import React from 'react';
import { connect } from 'react-redux';
import pluralize from 'pluralize';
import getTodosCount from '../selectors/todos-count';
import _ from 'lodash';

const TodoCount = ({ todos, incompletedTodosCount }) => {
  if (!_.size(todos)) {
    return <span></span>;
  }
  
  return <span className="todo-count">{incompletedTodosCount} {pluralize('items', incompletedTodosCount)} left</span>;
};

const mapStateToProps = (state) => {
  return {
    todos: state,
    incompletedTodosCount: getTodosCount(state, 'incompleted')
  }
};

export default connect(mapStateToProps)(TodoCount);