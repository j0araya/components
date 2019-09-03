import React from 'react';
import logo from '../../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dot, Line } from '../stepper/Stepper';
import { Phase, Phases, Next } from '../UI/Phases/Phase';


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
    <Phases>
      <Phase
        title="En revisión"
        color="#FF0000"
        state="Aprobado"
      />
      <Next color="#FF0000" />
      <Phase
        title="Partes"
        color="#0000FF"
        state="Aprobado"
      />
      <Next color="#0000FF"/>
      <Phase
        title="Planificación"
        color="#228B22"
        state="Pendiente"
      />
      <Next color="#228B22" />
      <Phase
        title="Ejecución"
        color="#000000"
        state={''}
        disabled={false}
      />
    </Phases>

    {/* </div> */}
  </section>
);

export default Main;