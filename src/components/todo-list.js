import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import _ from 'lodash';
import getVisibleTodos from '../selectors/visible-todos';

const TodoList = ({ todos, COMPLETE_TODO, INCOMPLETE_TODO, DELETE_TODO }) => (
  <ul className="todo-list">
    {_.map(todos, (todo) => (
      <li
        key={todo.id}
        className={todo.completed && 'completed'}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onClick={todo.completed ? () => INCOMPLETE_TODO(todo.id) : () => COMPLETE_TODO(todo.id)}
          />
          <label>{todo.text}</label>
          <button className="destroy" onClick={() => DELETE_TODO(todo.id)} />
        </div>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state, props) => {
  return {
    todos: getVisibleTodos(state, props)
  }
};

export default connect(mapStateToProps, actions)(TodoList);