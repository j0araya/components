import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../display/display';
import './sidebar.scss';

const Sidebar = ({ onSelect, options, selected }) => (
  <Col className="sidebar">
    {options.map(o => (
      <Col
        key={o.id}
        className="item center-center p1"
        onClick={() => onSelect(o)}
      >
        <Row className={`icon p1 ${selected.id === o.id ? 'active' : ''}`}>
          <i className={o.icon} />
        </Row>
        <Row>
          {o.name}
        </Row>
      </Col>
    ))}
  </Col>
);

Sidebar.defaultProps = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default Sidebar;
