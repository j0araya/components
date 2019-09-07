import React from 'react';
import { Dot, Line } from '../stepper/Stepper';
import Phases from '../UI/Phases/Phases';
import Social from '../UI/Social/Social';
import User from '../../store/User';
import Info from '../../store/Info';

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
  }
}

const Main = () => (
  <section className="landing">
    <div style={style.main1}>
      <Dot color="#FF0000" />
      <Line />
      <Dot color="#0000FF" />
      <Line />
      <Dot color="#228B22" /> 
      <Line />
      <Dot color="#808080" />
    </div>
    <Phases info={Info.info} />
    <Social />

    {/* </div> */}
  </section>
);

export default Main;