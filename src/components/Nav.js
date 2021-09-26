import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({ navLinks }) {
  return (
    <nav className='navbar main-container'>
      <ul>
        {navLinks.map(({ name, link }) => (
          <li key={name}>
            <NavLink to={link} activeClassName='active'>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
