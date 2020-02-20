import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../display/display';
import './sidebar.scss';

const Sidebar = ({ onSelect, selected, open, right }) => {
  const items = [
    { id: 1, name: 'Item 1', icon: 'fa fa-user'},
    { id: 2, name: 'item 2', icon: 'fa fa-users'},
  ];
  return (
    <div className={`sidebar ${open ? 'open' : 'close'} ${right ? 'right' : 'left'}`}>
      {items.map(i => (
        <Col
          key={i.id}
          className={`item v-center p1 ${selected.id === i.id ? 'active' : ''}`}
          onClick={() => onSelect(i)}
        >
          <Row className="icon p1">
            <i className={i.icon} />
          </Row>
          <Row className="text">
            {i.name}
          </Row>
        </Col>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  onSelect: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selected: PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
};

Sidebar.defaultProps = {
  selected: { id: '1' },
};

export default Sidebar;
