import React from 'react';
import './textinfo.scss';



const TextInfo = ({ color, label, text }) => (
  <div className={`text-info ${color}`}>
    <div className="text-info-label">
      {/* <div className="text-info-user">
        Jhon Doe
      </div> */}
      <div className="text-info-username">
        {label}
      </div>
    </div>
    <div className="text-info-input">
      {text}
    </div>
  </div>
);

TextInfo.defaultProps = {
  color: 'disabled',
};

export default TextInfo;