import React from 'react';
import PropTypes from 'prop-types';
import './col.scss';

const Col = ({ children, className, style, onClick }) => (
  <div
    className={`col ${className || ''}`}
    style={style}
    onClick={onClick}>
    {children}
  </div>
);

Col.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};

Col.defaultProp = {
  className: '',
  style: {},
  onClick: () => { },
};

export default Col;
