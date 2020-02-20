import React, { useState, useRef } from 'react';
import { Row, Col } from '../../components/display/display';
import Hamburger from './hamburger/hamburger';
import Logo from '../../images/me.jpeg';
import { Toogle, Toggle } from '../../components/inputs/Inputs';
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

const defaultUser = {
  name: 'Bnito',
  lastname: 'Camelo',
  email: 'Benito@camelot.ninja',
  picture: {
    data: {
      height: 50,
      is_silhouette: false,
      url: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10157358985479794&height=50&width=50&ext=1584767872&hash=AeRIh8cZFKYG0znn",
      width: 50,
    }
  },
  // id: "10157358985479794",
  // accessToken: "EAAWJECZBVJ9EBAGNaW0XtvZCB21Wb9ZBrkC9lepNLR2CgzXs0dTx8HRd1YpBFZB6vbJva5PXC2zb7vZCynGDKatnBgvKl3hCi067BxyGiXT3rXnW92vCH8rOp7LNp1n79V9RYwn43PLmpxjvUrINoZAnjSig7irmXNjC8wSWUIp8foiHhhVgVJ2sZAizTn3GQ4Hhakqv4q71AZDZD",
  userID: "10157358985479794",
  // expiresIn: 6129,
  // signedRequest: "waq7QAmOnMTdM2Nr9wgr2iV7p59x7PsAoWQmFLkwbV4.eyJ1c2VyX2lkIjoiMTAxNTczNTg5ODU0Nzk3OTQiLCJjb2RlIjoiQVFEYm90UHZKdHdVNnNxc21uYi12OU1FSmNoU2llYzRTeWI4QkcxbkF5WlVtcnFzaGlaWC1lamZ6T3QwUURUUVF4RlA3SHBsZ2NacldVVVpPLWdsSlBScWRoYnVOQWlUT3Bhb282VDZKVWVDTWNTcUh1NE5BdGpVSlVHMHVtQVM3UFJ1XzR4N2g5di1JNmhiNDBuSDV5LTJBc1FaS3hVTUFHQTYwSGs2cmtwc2Z4WGhYVXJpRzdqNU1wcnI4RFFRSUg3Rm1mY1R5eUxNUS1Eb0NLQnZFRE5MS3hrQWlnM25CZG02WkVjVnNSRERkeHlnSkhVb2dSQjR1NFdfbmd6MEdYZ1dCaUZscjJUT0R1elJoeHkxYnBSWGlxeDlEMWhkQUNlVXQ1NTJ6eXRLZXNuMnlpMmxHelBfUVVQNXBzWVM4Qjg1dkF4NlNVY0tWajJtd1FzWEN3aWMiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTU4MjE3NTg3MX0",
  // graphDomain: "facebook",
  // data_access_expiration_time: 1589951871,
};

const Profile = ({ user = defaultUser, onClick, open }) => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start' }} onClick={() => onClick(!open)}>
    <div style={{ height: 36, width: 36 }}>
      <img src={user.picture.data.url} style={{ height: '100%', width: '100%', borderRadius: 50, margin: 0, padding: 0 }} />
    </div>
    {open && (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginLeft: 8 }}>
        <div className="profile">
          <strong>{user.name}</strong>
        </div>
        <div>
          <small>{user.email}</small>
        </div>
      </div>
    )}
  </div>
);

const Header = ({ leftOpen, toggleLeft, rightOpen, toggleRight, user }) => {
  return (
    <nav>
      <Row>
        <Hamburger active={leftOpen} onClick={() => toggleLeft(!leftOpen)} />
      </Row>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <div style={{ flex: 1, display: 'flex' }}>
          <Toggle />
        </div>
        <div className={`width-sidebar ${rightOpen ? 'open' : 'close'}`} style={{ display: 'flex' }}>
          <Profile user={user} onClick={toggleRight} open={rightOpen} />
        </div>
      </div>
    </nav>
  );
}



export default Header;