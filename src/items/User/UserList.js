import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { List, UserItem, MenuItem } from '../../items/Items';
import { Row, Col } from '../../components/display/display';
import './user-item.scss';

const GET_USERS = gql`
  query {
    users {
      _id
      name
      lastname
      description
    }
  }
`;

const UserList = ({ onSelect, selected, show }) => {
  const { loading, error, data: { users } = { users: [] } } = useQuery(GET_USERS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;
  return (
    <div className={`item-view ${show ? 'open' : 'close'}`}>
      <Row className="p2">
        <h1>Lista</h1>
      </Row>
      <List
        items={users}
        selected={selected}
        item={item =>
          <UserItem
            user={item}
            key={item._id}
            onSelect={onSelect}
            menu={<MenuItem />}
          />}
      />
    </div>
  )
}

UserList.propTypes = {
  onSelect: PropTypes.func,
  selected: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

UserList.defaultProps = {
  onSelect: () => { },
  selected: {
    id: '0',
  }
};

export default UserList;