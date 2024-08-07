import React, { useState, useEffect, useRef } from 'react';
import Text from './Text';
import Send from './Send';

function Chat() {
  const [messages, setMessages] = useState([
    { text: 'This is a received message', type: 'received', time: '02:58 PM' },
    { text: 'This is a sent message', type: 'sent', time: '02:59 PM' }
  ]);

  const messagesRef = useRef(null);
  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
        <h1>23BEE1128</h1>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <Text key={index} text={msg.text} type={msg.type} time={msg.time} />
        ))}
        <div ref={messagesRef} />
      </div>
      <Send addMessage={addMessage} />
    </div>
  );
}

export default Chat;
