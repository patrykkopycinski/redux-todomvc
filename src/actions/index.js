import { v4 } from 'node-uuid';

export const ADD_TODO = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: v4(),
      text: text,
      completed: false
    }
  }
};

export const DELETE_TODO = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
};

export const COMPLETE_TODO = (id) => {
  return {
    type: 'COMPLETE_TODO',
    payload: id
  }
};

export const INCOMPLETE_TODO = (id) => {
  return {
    type: 'INCOMPLETE_TODO',
    payload: id
  }
};

export const COMPLETE_ALL_TODOS = () => {
  return {
    type: 'COMPLETE_ALL_TODOS'
  }
};

export const INCOMPLETE_ALL_TODOS = () => {
  return {
    type: 'INCOMPLETE_ALL_TODOS'
  }
};

export const DELETE_COMPLETED_TODOS = () => {
  return {
    type: 'DELETE_COMPLETED_TODOS'
  }
};
