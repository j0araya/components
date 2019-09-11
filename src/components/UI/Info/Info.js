import React from 'react';
import './Info.scss';

const style = {
  title: {
    margin: 0,
    padding: 0,
  },
  line: {
    height: 1,
    width: '100%',
    marginTop: 4,
    marginBottom: 4
  },
  bottomLine: {
    width: 4,
  }
};

const disabledColor = '#808080';

const InfoFooter = ({ left, right }) => (
  <div style={{ justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginTop: 8, display: 'flex' }}>
    <div style={{ color: '#808080', fontSize: 12 }}>
      {left}
    </div>
    <div style={{ color: '#808080', fontSize: 12, display: 'flex', alignItems: 'center' }}>
      {right}
    </div>
  </div>
);

const InfoHeader = ({ title, subtitle, disabled, color }) => {
  const styleTitle = { ...style.title, color: disabled ? disabledColor : `${color}` };
  return (
    <div className="info-header">
      <h4 style={styleTitle}>
        {title}
      </h4>
      <div style={{ color: 'gray', fontSize: 12, display: 'flex' }}>
        <div style={{ display: 'flex' }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}

const Info = ({ color = '#808080', onClick, children, disabled }) => {
  // const styleLine = { ...style.line, backgroundColor: disabled ? disabledColor : `${color}F0` };
  const styleBottomLine = { ...style.bottomLine, backgroundColor: disabled ? disabledColor : `${color}` }
  return (
    <div className="info-item" onClick={onClick} style={{ minHeight: 100, margin: 4 }}>
      <div style={styleBottomLine} />
      <div className="info-content">
        {children}
      </div>
    </div>
  )
}

const getStatus = (current, goal, offset, code = 'INC') => {
  if (current <= goal) return {
    color: 'green',
    sign: 'plus',
    difference: goal - current,
  };
  return {
    color: 'red',
    sign: 'minus',
    difference: current - goal,
  };

}

const InfoContent = ({ content }) => {
  const [current, goal] = content;
  const status = getStatus(current.percent, goal.percent);
  const statusDays = getStatus(current.days, goal.days);
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', marginTop: 8, height: 100 }}>
      <div style={{ display: 'flex', flex: 1 }} >
        <div style={{ flex: 1 }} />
        <div style={{ flex: 1 }}>
          <strong>Actual</strong>
        </div>
        <div style={{ flex: 1 }}>
          <strong>Meta</strong>
        </div>
        <div style={{ flex: 1 }}>
          <strong>Valoración</strong>
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1 }}>
          Backlogs
        </div>
        <div style={{ flex: 1 }}>
          {`${current.quantity} (${current.percent}%)`}
        </div>
        <div style={{ flex: 1 }}>
          {`${goal.quantity} (${goal.percent}%)`}
        </div>
        <div style={{ flex: 1, color: status.color }}>
         (<i class={`fas fa-${status.sign}`} style={{ fontSize: 12 }} />
         {` ${status.difference}%)`}
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1 }}>
          Tiempo Promedio
        </div>
        <div style={{ flex: 1 }}>
          {`${current.days} días`}
        </div>
        <div style={{ flex: 1 }}>
          {`${goal.days} días`}
        </div>
        <div style={{ flex: 1, color: statusDays.color }}>
         (<i class={`fas fa-${statusDays.sign}`} style={{ fontSize: 12 }} />
         {` ${statusDays.difference} días)`}
        </div>
      </div>
    </div>
  );
}


export {
  Info,
  InfoContent,
  InfoHeader,
  InfoFooter,
};