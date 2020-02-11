import React from 'react';
import logo from './logo.svg';
import Crypto from './Crypto.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CRYPTO RATE</h1>
      </header>
      <div className="App">
        {/* PONIŻEJ WRZUCAM KOMPONENT CRYPTO */}
        <Crypto />
      </div>
    </div>
  );
}

export default App;
