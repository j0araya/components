import React from 'react';
import PropTypes from 'prop-types';
import { useMutation, gql } from '@apollo/client';
import './text-input.scss';

const ADD_USER = gql`
  mutation addUser($name: String!, $lastname: String!, $email: String!, $description: String!) {
    addUser(name: $name, lastname: $lastname, email: $email, description: $description) {
      _id
      email
      name
      lastname
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
    onClick2();
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
  let name, description, lastname, email;
  const [addUser, { data }] = useMutation(ADD_USER);
  if (data && data.addUser) {
    console.log('sadasda', data.addUser);
  }
  // const onClick = (e) => {
  //   console.log(e)
  //   addUser({
  //     variables: {
  //       name: name.value,
  //       lastname: 'asdsd',
  //       description: description.value,
  //     }
  //   });
  // };
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addUser({
            variables: {
              name: name.value,
              lastname: lastname.value,
              email: email.value,
              description: description.value,
            },
            update: true,
          
            onComplete: (a) => console.log('complete',a),
          });
        }}
      >
        <input
          ref={node => name = node}
        />
        <input
          ref={node => lastname = node}
        />
        <input
          ref={node => email = node}
        />
        <input
          ref={node => description = node}
        />
        <button type="submit" > blaaaaaaaa </button>
        {/* <Button onClick2={onClick} /> */}
      </form>
    </div>
  );
};

export default TextInput;
