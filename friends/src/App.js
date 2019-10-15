import React from 'react';
import logo from './logo.svg';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavLink exact path='/'>Login</NavLink>
    </div>
  );
}

export default App;
