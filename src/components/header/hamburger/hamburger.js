import React from 'react';
import './hamburger.scss';

const Hamburger = ({ active, onClick, ...props }) => (
  <div className="v-center">
    <i 
    className="fas fa-bars hamburger active-primary center-center" 
    onClick={onClick}
    {...props}/>
  </div>
);
export default Hamburger;