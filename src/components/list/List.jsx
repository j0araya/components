import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../display/display';
import './list.scss';

const List = ({ onSelect, items, item }) => {
  return (
    <Col className="list">
      {items.map(i => item(i))}
    </Col>
  );
};

List.defaultProps = {
  onSelect: PropTypes.func,
  item: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default List;
