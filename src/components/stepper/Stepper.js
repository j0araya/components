import React from 'react';


const defaultColor = 'grey';
const style = { 
  step: {
    backgroundColor: 'white',
    height: '100%',
    minWidth: 36,
    borderRadius: '50%',
    border: 'solid',
    borderColor: defaultColor,
    borderWidth: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px',
  },
  dot: {
    borderBox: 'box-sizing',
    height: '100%',
    width: '100%',
    borderRadius: '50%',
    backgroundColor: defaultColor,
  },
  line : {
    border: 'solid',
    borderColor: defaultColor,
    borderWidth: '2px',
    height: 8,
    backgroundColor: 'white',
    padding: 1,
    flex: 1,
    borderRadius: 4,
  },
  center :{
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 4,
  }
}

const Dot = ({ color }) => {
  const lineStyle = { ...style.step, borderColor: color };
  const dotStyle = { ...style.dot, backgroundColor: color };
  return (
    <div style={lineStyle}>
      <div style={dotStyle} />
    </div>

  );
}

const Line = () => {
  return (
    <div style={style.line}>
      <div style={style.center} />
    </div>
  );
}

export { 
  Line,
  Dot,
};