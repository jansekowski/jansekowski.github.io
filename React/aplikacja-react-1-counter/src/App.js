import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import CounterKlasowy from './components/CounterKlasowy';

function App() {
  return (
    <div className="App">
      <Counter propText="Instancja komponentu Counter #1" />
      <Counter propText="" />
      <Counter propText="Instancja komponentu Counter #3"/>
      <Counter propText="Instancja komponentu Counter #4"/>
      <CounterKlasowy propColor="blue"/>
      <CounterKlasowy propColor="lightblue"/>
      <CounterKlasowy />
    </div>
  );
}

export default App;
