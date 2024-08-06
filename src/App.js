import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="sidebar"></div>
      <Chat/>
    </div>
  );
}

export default App;
