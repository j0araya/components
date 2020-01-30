import React, { useState } from 'react';
import { gql } from "apollo-boost";

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
      id
      name
      description
      createdAt
    }
  }
`;

const Main = () => {
  const [selectedSidebar, selectSidebar] = useState({ id: '1' });
  const [hamburgerOpen, toggleHamburger] = useState(false);
  return (
    <>
      <Header toggleHamburger={toggleHamburger} open={hamburgerOpen} />
      <SideBar
        onSelect={selectSidebar}
        selected={selectedSidebar}
        open={hamburgerOpen}
      />
      <section className="landing">
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