import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo';
import PropTypes from 'prop-types';
import { List, UserItem, MenuItem } from '../../items/Items';
import './user-item.scss';

const GET_USERS = gql`
  {
    users {
      name
      lastname
      description
      id
    }
  }
`;

const UserList = ({ onSelect, selected }) => {
  const { loading, error, data: { users } = { users: [] } } = useQuery(GET_USERS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <List
      items={users}
      selected={selected || users[0] || {}}
      className="list"
      item={item =>
        <UserItem
          user={item}
          key={item.id}
          onSelect={onSelect}
          menu={<MenuItem />}
        />}
    />
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
    id: '1',
  }
};

export default UserList;