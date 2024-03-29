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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div ref={node}>
      <header>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <div className='logo'>
            <h1 className='logo'><a href="#hero">{"<Oliver />"}</a></h1>
          </div>
          <div className='menu-toggle' onClick={toggleMenu}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
            <li className='nav-item'>
              <a href="#hero" onClick={closeMenu}>Home</a>
            </li>
            <li className='nav-item'>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className='nav-item'>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className='nav-item'>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;