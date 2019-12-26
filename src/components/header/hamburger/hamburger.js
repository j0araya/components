import React from 'react';
import './hamburger.scss';

const Hamburger = ({ active, onClick, ...props }) => (
  <div className="h-center hamburger v-center">
    <i
      className="fas fa-bars active-primary"
      onClick={onClick}
      {...props} />
  </div>
);
export default Hamburger;