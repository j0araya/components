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

const PhaseFooter = ({ left, right }) => (
  <div style={{ justifyContent: 'space-between', alignItems: 'flex-end', flex: 1, marginTop: 8, display: 'flex' }}>
    <div style={{ color: '#808080', fontSize: 12 }}>
      {left}
    </div>
    <div style={{ color: '#808080', fontSize: 12, display: 'flex', alignItems: 'center' }}>
      {right}
    </div>
  </div>
);

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
const PhaseHeader = ({ title, subtitle, disabled, color }) => {
  const styleTitle = { ...style.title, color: disabled ? disabledColor : `${color}F0` };
  return (
    <div className="phase-header">
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

const Phase = ({ color = '#808080', onClick, children, disabled }) => {
  // const styleLine = { ...style.line, backgroundColor: disabled ? disabledColor : `${color}F0` };
  const styleBottomLine = { ...style.bottomLine, backgroundColor: disabled ? disabledColor : `${color}80` }
  return (
    <div className="phase-item" onClick={onClick}>
      <div className="phase-content">
        {children}
        {/* <div style={styleLine} className="phase-not-md" /> */}
        {/* <Footer username={`@${'JhonDoe'}`} /> */}
      </div>
      <div style={styleBottomLine} />
    </div>
  )
}

const PhaseExperience = ({ info }) => (
  <div style={{ height: 200, backgroundColor: info.color, color: 'white', padding: 12 }}>
    <h2>{info.title}</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {info.data.reverse().map(d => (
        <div key={d.subtitle} style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 2, margin: 2 }}>
          <h4>{d.title}</h4>
          <div>{d.subtitle}</div>
          <small>{d.from} - {d.to}</small>
        </div>
      ))}
    </div>
  </div>
)

const PhaseInfo = ({ info }) => (
  <div style={{ height: 200, backgroundColor: info.color, color: 'white', padding: 12 }}>
    <h2>{info.title}</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {info.data.reverse().map(d => (
        <div key={d.title} style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 2, margin: 2 }}>
          <h4>{d.title}</h4>
          <div>{d.subtitle}</div>
          <small>{d.from} - {d.to}</small>
        </div>
      ))}
    </div>
  </div>
)

const PhaseTech = ({ info }) => (
  <div style={{ height: 200, backgroundColor: info.color, color: 'white', padding: 12 }}>
    <h2>{info.title}</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {info.data.reverse().map(d => (
        <div key={d.title} style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: 2, margin: 2 }}>
          <h4>{d.title}</h4>
          <div>{d.subtitle}</div>
          <small>{d.from} - {d.to}</small>
        </div>
      ))}
    </div>
  </div>
)

const PhasesContainer = ({ children }) => (
  <div className="phase-container">
    {children}
  </div>
);

export {
  Phase,
  PhasesContainer,
  // PhaseContent,
  PhaseInfo,
  PhaseExperience,
  PhaseTech,
  Next,
  PhaseHeader,
  PhaseFooter,
};