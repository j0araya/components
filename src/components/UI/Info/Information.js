import React from 'react';
import {
  Info,
  InfoHeader,
  InfoContent,
} from './Info';

const style = {
  display: 'flex',
  flex: 1,
}
const infoDefault = [{
  color: 'red',
  title: 'Fase Roja',
  current: {
    quantity: 150, // number
    percent: 19, // percent
    days: 100,
  },
  goal: {
    percent: 5, // percent
    quantity: 7.5, // number
    tolerance: 20, // percent
    days: 50,
  }
}, {
  color: 'blue',
  title: 'Fase Azul',
  current: {
    quantity: 276, // number
    percent: 36, // percent
    days: 120,
  },
  goal: {
    percent: 25, // percent
    quantity: 37.5, // number
    tolerance: 20, // percent
    days: 100,
  }
}, {
  color: 'green',
  title: 'Fase Verde',
  current: {
    quantity: 350, //number
    percent: 45, // percent
    days: 140,
  },
  goal: {
    percent: 70, // percent
    quantity: 105, // number
    tolerance: 20, // percent
    days: 160,
  }
}];

const Information = ({ info = infoDefault }) => {
  return (
    <div >
      {info.map(i => (
        <Info color={i.color}>
          <InfoHeader key={i.title} title={i.title} color={i.color} />
          <InfoContent content={[i.current, i.goal]} />
        </Info>
      ))}
    </div>
  );
}

export default Information;