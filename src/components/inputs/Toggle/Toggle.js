import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './toggle.scss';

const Toggle = ({ onClick, selected }) => {
  const [value, toggle] = useState(true);
  const transition = () => {
    document.documentElement.classList.add('transition');
    setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000);
  }
  const onChange = () => {  
    transition();
    document.documentElement.setAttribute('data-theme', value ? 'dark': 'light');
    toggle(!value);
  }
  return (
    <div className="input-toggle">
      <input
        id="switch"
        name="theme"
        type="checkbox"
        className="btn btn-primary"
        onClick={onChange}
      />
      <label for="switch">Toggle</label>
    </div>
  );
};

export default Toggle;
