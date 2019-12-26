import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../../components/display/display';
import './user-item.scss';

const UserItem = ({ user }) => {
  return (
    <Row className="user-item height4 p2 text-primary">
      <Row className="">
        <i className="fas fa-user-circle" style={{ fontSize: 36 }} />
      {/* </Row>
      <Row> */}
        {user.name}
      </Row>
      <Row>
        {new Date().toLocaleDateString('es-cl')}
      </Row>
    </Row>
  )
};

export default UserItem;
