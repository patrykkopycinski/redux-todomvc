import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './todo-list';
import Form from './form';
import ToggleAll from './toggle-all';
import Footer from './footer';
import * as actions from '../actions/';
import getTodosCount from '../selectors/todos-count';

class App extends Component {
  render() {
    const todosCount = _.size(this.props.todos);
    const { filter } = this.props.routeParams;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form />
        </header>        
        
        <section className="main">
          {todosCount ? <ToggleAll /> : null}
          <TodoList filter={filter || 'all'} />
        </section>

        {todosCount ? <Footer /> : null}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state,
    todosCount: getTodosCount(state)
  }
};

export default connect(mapStateToProps, actions)(App);