import React, { Component } from 'react';
import * as actions from '../actions/';
import { connect } from 'react-redux';

class Form extends Component {
  handleKeyDown = (event) => {
    const inputValue = this.todoInput.value;
    const { ADD_TODO } = this.props;

    if (event.keyCode !== 13 || !inputValue) {
      return;
    }

    ADD_TODO(inputValue);
    this.todoInput.value = '';
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => this.todoInput = ref}
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyDown={this.handleKeyDown}
          autofocus
        />
      </div>
    )
  }
}

export default connect(null, actions)(Form);