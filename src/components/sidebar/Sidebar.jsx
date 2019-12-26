import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { Row, Col } from '../display/display';
import './sidebar.scss';

const GET_ITEMS = gql`
  {
    items {
      id
      name
      description
      icon
    }
  }
`;

const Sidebar = ({ onSelect, selected, open }) => {
  const { loading, error, data: { items } = { items: [{ id: '1' }] } } = useQuery(GET_ITEMS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <div className={`sidebar ${open ? 'open' : 'close'}`}>
      {items.map(i => (
        <Col
          key={i.id}
          className="item v-center p1"
          onClick={() => onSelect(i)}
        >
          <Row className={`icon p1 ${selected.id === i.id ? 'active' : ''}`}>
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
