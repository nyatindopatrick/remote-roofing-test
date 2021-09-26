import React from 'react';
import Nav from './Nav';
import TopBar from './TopBar';

const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'How it works',
    link: '/how-it-works',
  },
];

export default function NavBar() {
  return (
    <div className='bg-grey'>
      <TopBar />
      <Nav navLinks={navLinks} />
    </div>
  );
}
