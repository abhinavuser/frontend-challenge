import React, { useState } from 'react';

function Send({ addMessage }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      addMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>&#10148;</button>
    </div>
  );
}

export default Send;
