import React from 'react';
import logo from '../assets/img/logo.svg';

export default function TopBar() {
  return (
    <div className="main-container bg-grey flex-between">
      <a href='#'>
        <img src={logo} alt='logo' />
      </a>
      <p>
        <i className='fas fa-phone'></i>
        214-865-8818
      </p>
    </div>
  );
}
