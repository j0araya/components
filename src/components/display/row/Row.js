import React from 'react';
import PropTypes from 'prop-types';
import './row.scss';

const Row = ({ children, className, style, onClick }) => (
  <div 
    className={`row ${className || ''}`} 
    style={style}
    onClick={onClick}
    >
    {children}
  </div>
);

Row.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

Row.defaultProp = {
  className: '',
  style: {},
  onClick: {},
};

export default Row;
