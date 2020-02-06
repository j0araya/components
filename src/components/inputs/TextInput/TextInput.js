import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import { useMutation } from '@apollo/react-hooks';

const ADD_USER = gql`
  mutation addUser($name: String!, $description: String!) {
    addUser(name: $name, description: $description) {
      name
    	description
    }
  }
`;

const TextInput = () => {
  let name = 'dsd';
  let description = 'asdsad';
  const [addUser, { data }] = useMutation(ADD_USER);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addUser({
            variables: {
              name: name.value,
              description: description.value,
            }
          });
        }}
      >
        <input
          ref={node => name = node}
        />
        <input
          ref={node => description = node}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TextInput;
