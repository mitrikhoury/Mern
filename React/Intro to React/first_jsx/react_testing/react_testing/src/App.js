import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import {Todo} from './components/todoList'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
//import firstBtn from './components'
function App() {
  return (
    <div className="App">
      <Greet/>
      <Todo/>
  </div>
  );
}

export default App;
