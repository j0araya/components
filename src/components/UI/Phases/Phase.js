import React from 'react';
import './Phase.css';

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
    height: 4,
    flex: 1,
  }
};

const disabledColor = '#808080';

const Footer = ({ username, adate }) => {
  const time = new Date().toLocaleTimeString('es-cl').split(':');
  const dateTime = new Date().toLocaleDateString('es-cl').split('-2019')[0].split('-').join('/');
  return (
    <div style={{ justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginTop: 8, display: 'flex' }}>
      <div style={{ color: '#808080', fontSize: 12 }}>
        {username}
      </div>
      <div style={{ color: '#808080', fontSize: 12, display: 'flex', alignItems: 'center' }}>
        {dateTime}
        <i class="fas fa-circle" style={{ fontSize: 4, margin: 4, marginTop: 6 }} />
        {`${time[0]}:${time[1]}`}
      </div>
    </div>
  )
};

const Next = ({ color, disabled }) => (
  <div
    style={{
      padding: 4,
      height: '100%',
      display: ' flex',
      alignItems: 'center',
      color: disabled ? disabledColor : color,
    }}
    className="phase-not-md"
  >
    <i className="fas fa-angle-right fa-2x phase-not-md" />
  </div>
)

const Phase = ({ title, color = '#808080', state, disabled }) => {
  const styleTitle = { ...style.title, color: disabled ? disabledColor : `${color}F0` };
  const styleLine = { ...style.line, backgroundColor: disabled ? disabledColor : `${color}F0` };
  const styleBottomLine = { ...style.bottomLine, backgroundColor: disabled ? disabledColor : `${color}F0` }
  return (
    <div className="phase-item">
      <div className="phase-content">
        <div className="phase-header">
          <h4 style={styleTitle}>
            {title}
          </h4>
          <div style={{ color: 'gray', fontSize: 12, display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              {state}
            </div>
          </div>
        </div>
        {/* <div style={styleLine} className="phase-not-md" /> */}
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', paddingTop: 4 }} className="phase-not-md">
          <div style={{ flexDirection: 'column' }}>
            <div style={{ color: '#000000', fontSize: 12 }}>
              Comentario
            </div>
            <div style={{ color: '#808080', fontSize: 12 }}>
              Listo
            </div>
          </div>
          {/* <div className="phase-sip-md">
            <div style={{ color: '#808080', fontSize: 12 }}>
              {state}
            </div>
          </div> */}
        </div>
        <Footer username={`@${'JhonDoe'}`} />
      </div>
      <div style={styleBottomLine} />
    </div>
  )
}

const Phases = ({ children }) => (
  <div className="phase-container">
    {children}
  </div>
);

export {
  Phase,
  Phases,
  Next,
};