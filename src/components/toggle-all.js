import React, { Component } from 'react';
import * as actions from '../actions/';
import { connect } from 'react-redux';

class ToggleAll extends Component {
  handleToggle = () => {
    const { COMPLETE_ALL_TODOS, INCOMPLETE_ALL_TODOS } = this.props;

    if (this.toggleAll.checked) {
      return COMPLETE_ALL_TODOS();
    }

    return INCOMPLETE_ALL_TODOS();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => this.toggleAll = ref}
          className="toggle-all"
          type="checkbox"
          onClick={this.handleToggle}
        />
      </div>
    )
  }
}

export default connect(null, actions)(ToggleAll);


