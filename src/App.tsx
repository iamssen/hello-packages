import { SampleComponent } from '@ssen-temp/sample-component';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <SampleComponent text="HELLO PACKAGE?"/>
      </header>
    </div>
  );
}

export default App;
