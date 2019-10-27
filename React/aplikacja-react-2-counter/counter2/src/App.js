import React from 'react';
import './App.css';
import Counter from './components/Counter';



function App() {
  return (
    <div className="App">
      <Counter initValue={10}/>
      <Counter initValue={100}/>
      <Counter initValue={1000}/>
    </div>
  );
}

export default App;
