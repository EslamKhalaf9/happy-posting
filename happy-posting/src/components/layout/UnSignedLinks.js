import React from 'react';
import { NavLink } from 'react-router-dom';

const UnSignedLinks = () => {
  return (
    <ul className="flex items-center text-2xl">
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
          to="/login"
          activeStyle={{ color: '#FF0', fontWeight: 'bold' }}
        >
          Login
        </NavLink>
      </li>
      <li className="px-2">
        <NavLink
          to="/signup"
          activeStyle={{ color: '#FF0', fontWeight: 'bold' }}
        >
          Signup
        </NavLink>
      </li>
    </ul>
  );
};

export default UnSignedLinks;
