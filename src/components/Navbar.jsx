import React, { useState } from 'react';
import '../styles/Navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/*Desktop*/}
      <header>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <div className='logo'>
            <h1 className='logo'>Oliver.dev</h1>
          </div>
          <div className='menu-toggle' onClick={toggleMenu}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Projects</li>
            <li className='nav-item'>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
