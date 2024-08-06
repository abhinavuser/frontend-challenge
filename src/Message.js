import React from 'react';

function Message({ text, type, time }) {
  return (
    <div className={`message ${type}`}>
      <p>{text}</p>
      <span className="timestamp">{time}</span>
    </div>
  );
}

export default Message;
