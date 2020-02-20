import React, { useState } from 'react';
import { gql } from "apollo-boost";

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
import { useMutation } from 'react-apollo';
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

const ADD_ITEM = gql`
  mutation addItem($name: String!, $description: String!) {
    addItem(name: $name, description: $description)
    {

      name
      description
      createdAt
    }
  }
`;

const Button = ({ name , onClick }) => (
  <div>
    <button type="button" onClick={onClick}> {name} </button>
  </div>
);

const Main = ({ onLogin, user }) => {
  const [selectedLeft, selectLeft] = useState({ id: '1' });
  const [leftOpen, toggleLeft] = useState(false);

  const [selectedRight, selectRight] = useState({});
  const [rightOpen, toggleRight] = useState(false);

  const responseFacebook = (response) => {
    console.log('facbook', response);
    onLogin(response);
  }
  const responseGoogle = (response) => {
    console.log('google', response);
    onLogin(response);
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
          render={({ onClick }) => <Button name="FB" onClick={onClick} />}
        />
        <br />
        <br />


        <GoogleLogin
          clientId="" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        {/* <Header /> */}
        <TextInput />
        <button id="create" onClick={() =>{}}> hola que ase</button>
        <UserContainer />


        {/* <div onClick={() => addItem({ variables: { name: 'dgdgd', description: '34444' } })}>
          agregar
        </div> */}
        {/* <div style={style.main1}>
      <Dot color="#FF0000" />
      <Line />
      <Dot color="#0000FF" />
      <Line />
      <Dot color="#228B22" /> 
      <Line />
      <Dot color="#808080" />
    </div> */}
        {/* <Phases info={Info.info} /> */}
        {/* <Information /> */}
        {/* <Social /> */}
        {/* <Row style={{ height: 50, color: 'black' }}>
          {users.map(u => (
            <Row key={u.id} className="h-center v-center">
              {u.name}
            </Row>
          ))} */}
        {/* {selectedSidebar.name} */}
        {/* </Row> */}
        {/* <div className="history-main"> */}
        {/* <History /> */}
        {/* <History /> */}
        {/* </div> */}

        {/* </div> */}
      </section>
    </>
  )
};

export default Main;