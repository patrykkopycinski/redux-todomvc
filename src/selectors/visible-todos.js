import { createSelector } from 'reselect';
import _ from 'lodash';

const todosSelector = state => state;
const filterSelector = (state, props) => props.filter;

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return _.filter(todos, (todo) => !todo.completed);
    case 'completed':
      return _.filter(todos, (todo) => todo.completed);
  }
};

export default createSelector(
  todosSelector,
  filterSelector,
  getTodos
);
