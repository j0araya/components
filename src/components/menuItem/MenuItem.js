import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../display/display';
import './menu-item.scss';

const item = ({ id, name, icon }) => (
  <Row key={id} className="hover-primary menu-option v-center">
    <span style={{ margin: 4 }}>{name}</span>
    <i className={icon} />
  </Row>
);

const MenuItem = ({ options }) => (
  <Row className="container-menu-item">
    <Row className="menu-options active-primary">
      {options.map(item)}
    </Row>
  </Row>
);

MenuItem.propTypes = {

};

MenuItem.defaultProps = {
  options: [{
    id: 1,
    name: 'VER',
    icon: 'far fa-eye'
  }, {
    id: 2,
    name: 'EDITAR',
    icon: 'far fa-edit',
  }, {
    id: 3,
    name: 'ELIMINAR',
    icon: 'fas fa-trash',
  }]
}

export default MenuItem;
