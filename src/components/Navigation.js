import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li>
            <NavLink to="/" activeClassName="is-active">
              Member Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Create A New Member</NavLink>
          </li>
          <li>
            <NavLink to="/">Manage Inductee Categories</NavLink>
          </li>
          <li>
            <NavLink to="/">Manage Honouree Individual Categories</NavLink>
          </li>
          <li>
            <NavLink to="/">Manage Honouree Team Categories</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
