import React from 'react';

function Text({ text, type, time }) {
  return (
    <div className={`message ${type}`}>
      <div>
      <p>{text}</p>
      <span className="timestamp">{time}</span>
      </div>
    </div>
  );
}

export default Text;
