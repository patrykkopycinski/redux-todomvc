import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_TODO':
      return _.omit(state, action.payload);
    case 'COMPLETE_TODO': {
      const updatedTodo = { ...state[action.payload], completed: true };
      return { ...state, [action.payload]: updatedTodo };
    }
    case 'INCOMPLETE_TODO': {
      const updatedTodo = { ...state[action.payload], completed: false };
      return { ...state, [action.payload]: updatedTodo };
    }
    case 'COMPLETE_ALL_TODOS': {
      const updatedState = _.mapValues(state, (todo) => {
        todo.completed = true;
        return todo;
      });
      return { ...updatedState };
    }
    case 'INCOMPLETE_ALL_TODOS': {
      const updatedState = _.mapValues(state, (todo) => {
        todo.completed = false;
        return todo;
      });
      return { ...updatedState };
    }
    case 'DELETE_COMPLETED_TODOS': {
      return _.omitBy(state, (todo) => todo.completed)
    }
    default:
      return state;
  }
}
