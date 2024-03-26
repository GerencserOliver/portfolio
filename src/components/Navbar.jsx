import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={node}>
      <header>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <div className='logo'>
            <h1 className='logo'>Oliver.dev</h1>
          </div>
          <div className='menu-toggle' onClick={toggleMenu}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
            <li className='nav-item'>
              <a href="#hero">Home</a>
            </li>
            <li className='nav-item'>
              <a href="#about">About</a>
            </li>
            <li className='nav-item'>
              <a href="#projects">Projects</a>
            </li>
            <li className='nav-item'>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;