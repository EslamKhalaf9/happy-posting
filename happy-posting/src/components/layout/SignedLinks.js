import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedLinks = () => {
  return (
    <ul className="flex items-center text-l sm:text-2xl">
      <li className="px-2">
        <NavLink
          exact
          to="/"
          activeStyle={{ color: '#FF0', fontWeight: 'bold' }}
        >
          Dashboard
        </NavLink>
      </li>
      <li className="px-2">
        <NavLink
          to="/createpost"
          activeStyle={{ color: '#FF0', fontWeight: 'bold' }}
        >
          Create Post
        </NavLink>
      </li>
      <li className="px-2">
        <NavLink
          to="/logout"
          activeStyle={{ color: '#FF0', fontWeight: 'bold' }}
        >
          Logout
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedLinks;
