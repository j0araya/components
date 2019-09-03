import React, { useState } from 'react';

const Header = function () {
  const [isOpen, toggle] = useState(false);

  return (
    <nav>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className={isOpen && 'fade'}><a href="#">Inicio</a></li>
        <li className={isOpen && 'fade'}><a href="#">Tutoriales</a></li>
        <li className={isOpen && 'fade'}><a href="#">Referencia</a></li>
        <li onClick={() => toggle(!isOpen)}>
          <div className="hamburger">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </li>
      </ul>
    </nav>
  );
}



export default Header;