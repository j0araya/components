import React, { useState } from 'react';
import {
  Phase,
  PhasesContainer,
  // PhaseContent,
  Next,
  PhaseHeader,
  PhaseInfo,
  PhaseFooter,
} from './Phase';
// import Info from '../../store/Info';

const NewHOC = (PassedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      )
    }
  }
}

const Phases = ({ info }) => {
  const [selected, select] = useState(info[0]);
  const Componente = NewHOC(selected.component);
  return (
    <div>
      <PhasesContainer>
        {info.map(i => (
          <Phase key={i.id} color={i.color} onClick={() => select(i)} >
            <PhaseHeader title={i.title} color={i.color} />
            {/* <PhaseInfo label="hola" info="que hce" color={i.color} />
          <PhaseFooter left="@hola" right="la we" color={i.color} /> */}
          </Phase>
        ))}
      </PhasesContainer>
      {<Componente info={selected} />}
    </div>
  );
}

export default Phases;