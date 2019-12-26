import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../display/display';
import Hamburger from '../header/hamburger/hamburger';
import './sidebar.scss';

const Sidebar = ({ onSelect, options, selected, open, toggleHamburger }) => (
  <div className={`sidebar ${open ? 'open': 'close'}`}>
    {/* <Hamburger open={open} onClick={() => toggleHamburger(!open)}/> */}
    {options.map(o => (
      <Col
        key={o.id}
        className="item v-center p1"
        onClick={() => onSelect(o)}
      >
        <Row className={`icon p1 ${selected.id === o.id ? 'active' : ''}`}>
          <i className={o.icon} />
        </Row>
        <Row className="text">
          {o.name}
        </Row>
      </Col>
    ))}
  </div>
);

Sidebar.defaultProps = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  open: PropTypes.bool.isRequired,
};

export default Sidebar;
