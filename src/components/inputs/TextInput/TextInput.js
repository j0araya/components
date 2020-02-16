import React from 'react';
import PropTypes from 'prop-types';
import { useMutation, gql } from '@apollo/client';
import './text-input.scss';

const ADD_USER = gql`
  mutation addUser($name: String!, $description: String!) {
    addUser(name: $name, description: $description) {
      name
    	description
    }
  }
`;

const Button = ({ onClick2 }) => {
  const onClick = (e) => {
    e.persist();
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = e.target;
    const x = (clientX - offsetLeft) / offsetWidth;
    const y = (clientY - offsetTop) / offsetHeight;
    // console.log(e, 'click', click);
    console.log('ripple', x, y);
    // root.style.setProperty('--ripple-x', x);
    // root.style.setProperty('--ripple-y', y);
    // console.log('offsetWidth', offsetWidth, 'offsetHeight', offsetHeight, 'offsetTop', offsetTop, 'offsetLeft', offsetLeft, 'pos', pos)
  };
  return (
    <div style={{ display: 'flex' }}>
      <button className="btn btn-primary" type="button" onClick={onClick}>
        <span className="btn-text">Add Todos</span>
      </button>
    </div>
  );
};

const TextInput = () => {
  let name = 'dsd';
  let description = 'asdsad';
  const [addUser, { data }] = useMutation(ADD_USER);
  const onClick = (e) => {
    console.log(e)
  };
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
        <Button onClick2={onClick} />
      </form>
    </div>
  );
};

export default TextInput;
