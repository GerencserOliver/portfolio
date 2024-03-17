import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
      {/*Desktop*/}
      <nav>
        <div className='logo'>
          <h1 className='logo'>Oliver.dev</h1>
        </div>
        <div className=''>
          <ul className='navbar-nav'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Projects</li>
            <li className='nav-item'>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
