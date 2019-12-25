import React, { useState, useRef } from 'react';
import { Row, Col } from '../../components/display/display';
import Hamburger from './hamburger/hamburger';
import Logo from '../../images/me.jpeg';
import './header.scss';

const styles = {
  profile: {
    flex: 1,
    display: 'flex',
  },
  container: {
    backgroundColor: '#70C3B7',
    color: 'white',
    paddingTop: 12,
    paddingBottom: 12,
  }
};

const Photo = () => (
  <div className="profile-photo-container">
    <div className="profile-photo-content">
      <img className="profile-photo" src={Logo} alt="hola" />
    </div>
  </div>
);

const Info = () => (
  <div className="profile-info-container">
    <div className="profile-info-content">
      <h1 className="profile-info-title">
        Jonathan Araya
      </h1>
      <h2 className="profile-info-subtitle">
        Developer
      </h2>
    </div>
  </div>
);

const Contact = () => {
  const emailRef = useRef(null);
  const clipboard = ({ target }) => {
    document.execCommand('copy');
    var textArea = document.createElement("textarea");
    textArea.value = emailRef.current.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  }
  return (
    <div className="profile-contact-container">
      <div
        className="profile-contact-item"
        data-tag="jonathan.araya.m@gmail.com"
        onClick={clipboard}>
        <i className="fa fa-envelope" aria-hidden="true" />
        <span ref={emailRef}>jonathan.araya.m@gmail.com</span>
      </div>
      <div className="profile-contact-item">
        <i className="fa fa-phone" aria-hidden="true" />
        <span>
          <a href="tel:+56995436013">+56 9 9543 6013</a>
        </span>
      </div>
      <div className="profile-contact-item">
        <i className="fa fa-map-marker" aria-hidden="true" />
        <span>Viña del mar, Valparaíso, Chile </span>
      </div>
    </div>
  );
};



const Header = ({ open, toggleHamburger, }) => {
  return (
    <nav>
      <Row>
        <Hamburger active={open} onClick={() => toggleHamburger(!open)} />
        {/* <div style={styles.container}>
          <div style={styles.profile} className="profile">
            <Photo />
            <Info />
          </div>
          <div style={styles.contact}>
            <Contact />
          </div>
        </div> */}
      </Row>
    </nav>
  );
}



export default Header;