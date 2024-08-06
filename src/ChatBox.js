import React, { useState } from 'react';
import Message from './Message';
import GetInput from './GetInput';

function ChatBox() {
  const [messages, setMessages] = useState([
    { text: 'This is a received message', type: 'received', time: '02:58 PM' },
    { text: 'This is a sent message', type: 'sent', time: '02:59 PM' }
  ]);

  const addMessage = (text) => {
    const newMessage = {
      text,
      type: 'sent',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Your Registration Number</h1>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} type={msg.type} time={msg.time} />
        ))}
      </div>
      <GetInput addMessage={addMessage} />
    </div>
  );
}

export default ChatContainer;
