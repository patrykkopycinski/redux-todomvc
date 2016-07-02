import { createSelector } from 'reselect';
import _ from 'lodash';

const todosSelector = state => state;
const valueSelector = (state, value = 'all') => value;
const getTodos = (todos, value) => {
  if (value === 'completed') {
    return _.filter(todos, (todo) => todo.completed).length;
  }

  if (value === 'incompleted') {
    return _.filter(todos, (todo) => !todo.completed).length;
  }

  return _.size(todos);
};

export default createSelector(
  todosSelector,
  valueSelector,
  getTodos
);
