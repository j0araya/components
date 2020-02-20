import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login'

import { Dot, Line } from '../stepper/Stepper';
import Phases from '../UI/Phases/Phases';
import Information from '../UI/Info/Information';
import Social from '../UI/Social/Social';
import History from '../UI//History/History';
import User from '../../store/User';
import Info from '../../store/Info';
import Header from '../header/Header';
import SideBar from '../../components/sidebar/Sidebar';
import { Row, Col } from '../../components/display/display';
import { UserList } from '../../items/Items';
import { UserContainer } from '../../containers/Containers';
import { TextInput } from '../../components/inputs/Inputs';


// const user = new User();
// console.log('uer', Info.info);
const style = {
  main1: {
    display: 'flex',
    flexWrap: 'no wrap',
    flex: 1,
    height: 36,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 50,
  },
  main2: {
    display: 'flex',
    // flexWrap: 'no wrap',
    flex: 1,
    height: 46,
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  backgroundColor: 'rgba(45, 45, 45, 1)',
  textColor: 'rgb(170, 170, 170)',
  activeColor: 'white',
}

const GET_USERS = gql`
  {
    users {
      name
      lastname
      id
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      name
    	lastname
    }
  }
`;

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

const Button = ({ name, onClick }) => (
  <div>
    <button type="button" onClick={onClick}> {name} </button>
  </div>
);

const Main = ({ onLogin, user }) => {
  const [addUser, { data }] = useMutation(ADD_USER);

  const [selectedLeft, selectLeft] = useState({ id: '1' });
  const [leftOpen, toggleLeft] = useState(false);

  const [selectedRight, selectRight] = useState({});
  const [rightOpen, toggleRight] = useState(false);

  const responseFacebook = (response) => {
    console.log('facbook', response);
    const { name, email, graphDomain } = response;
    addUser({
      variables: {
        name: name.split(' ')[0],
        lastname: name.split(' ')[1] || '',
        description: "Facebook",
        email,
      }
    });
    // onLogin(response);
  }
  const responseGoogle = (response) => {
    console.log('google', response);
    const { profileObj } = response;
    addUser({
      variables: {
        name: profileObj.givenName,
        lastname: profileObj.familyName,
        description: "Google",
        email: profileObj.email,
      }
    });
    onLogin(response);
  }

  if (data && data.addUser) {
    console.log('sadasda', data.addUser);
  }

  return (
    <>
      <Header
        toggleLeft={toggleLeft}
        toggleRight={toggleRight}
        leftOpen={leftOpen}
        rightOpen={rightOpen}
        user={user}

      />
      <SideBar
        onSelect={(a) => selectLeft(a)}
        selected={selectedLeft}
        open={leftOpen}
      />
      <SideBar
        onSelect={(a) => selectRight(a)}
        selected={selectedRight}
        open={rightOpen}
        right
      />
      <section className="landing">
        <FacebookLogin
          appId="1558077494339537" //APP ID NOT CREATED YEt
          fields="name,email,picture"
          callback={responseFacebook}
          render={({ onClick }) => <Button name="Facebook" onClick={onClick} />}
        />
        <br />
        <br />
        <GoogleLogin
          clientId="180745944117-svq2fn0bgco8vohfkpqt1rnts9h73dft.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          render={({ onClick, disabled }) => <Button name="Google" onClick={onClick} />}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        {/* <TextInput /> */}
        {/* <button id="create" onClick={() => { }}> hola que ase</button> */}
        <UserContainer />    
      </section>
    </>
  )
};

export default Main;