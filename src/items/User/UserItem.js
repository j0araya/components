import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../../components/display/display';
import './user-item.scss';
import moment from 'moment';

const UserItem = ({ user, menu, onSelect }) => {
  return (
    <Row className="list-item p2 height4 text-primary" onClick={() => onSelect(user)}>
      <Col className="flex" style={{ justifyContent: 'space-between' }}>
        <Row>
          <Row>
            <i className="fas fa-user-circle" style={{ fontSize: 36, paddingRight: 8 }} />
          </Row>
          <Col>
            <Row style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>
              <h3 className="active-primary p0 m0">{`${user.name} ${user.lastname} `}</h3>
              <span style={{ marginLeft: 8 }}>{` (${user.description})`}</span>
            </Row>
            <Col style={{ fontSize: 14 }}>
             {user.email}
            </Col>
          </Col>
          {menu}
          {/* <Row className="menu-list-item active-primary">
            <i class="fas fa-ellipsis-v" />
          </Row> */}
        </Row>
        <Row style={{ justifyContent: 'space-between', paddingTop: 4 }}>
          <Row>
            <small>{`${moment(user.updated_date).from(new Date())}`}</small>
          </Row>
          <Row>
            <small> {moment().format("DD MMM")}</small>
          </Row>
        </Row>
      </Col>
    </Row>
  )
};

export default UserItem;
