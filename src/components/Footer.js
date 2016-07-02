import React from 'react';
import { IndexLink, Link } from 'react-router';
import TodoCount from './todo-count';
import ClearCompleted from './clear-completed';

const Footer = () => {
  return (
    <footer className="footer">
      <TodoCount />
      <ul className="filters">
        <li>
          <IndexLink to="/" activeClassName="selected">All</IndexLink>
        </li>
        <li>
          <Link to="/active" activeClassName="selected">Active</Link>
        </li>
        <li>
          <Link to="/completed" activeClassName="selected">Completed</Link>
        </li>
      </ul>
      <ClearCompleted />
    </footer>
  )
};

export default Footer;