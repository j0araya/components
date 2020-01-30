import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserList from './UserList';
import UserView from './UserView';
import { Row, Col } from '../../components/display/display';

const UserContainer = ({ user = {} }) => {
  const [selectedUser, selectUser] = useState({ id: user.id || '0' });
  useEffect(() => {

  }, [selectedUser.id]);
  return (
    <>
      <UserView user={selectedUser} show={!!+selectedUser.id} onClose={selectUser} />
      <UserList selected={selectedUser} show={!+selectedUser.id} onSelect={selectUser} />
    </>
  )
};

UserContainer.propTypes = {

};

UserContainer.defaultProps = {

};

export default UserContainer;
