import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo';
import { Row, Col } from '../../components/display/display';

const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      name
    	lastname
    }
  }
`;

const UserView = ({ user, show, onClose }) => {
  const { loading, error, data: { getUser } = { getUser: [] } } = useQuery(GET_USER, {
    variables: { id: user.id }
  });
  if (error) return `Error! ${error.message}`;
  return (
    <div className={`item-view ${show ? 'open' : 'close'}`}>
      {loading ? 'Loading...' : (
        <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Row className="p2">
            <h1>{getUser && getUser.name}</h1>
          </Row>
          <Row style={{ paddingRight: 16 }} onClick={() => onClose({ id: '0' })}>
            <h1><i className="fas fa-times" /></h1>
          </Row>
        </Row>
      )}
    </div>
  )
};

UserView.propTypes = {

};

UserView.defaultProps = {

};

export default UserView;
