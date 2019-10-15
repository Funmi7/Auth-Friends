import React from 'react';
import logo from './logo.svg';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';


function App(props) {

 const onLogout = () => {
    localStorage.clear();
    props.history.replace('/')
  }
  return (
    <div className="App">
      <nav>
      <NavLink exact to='/'>Login</NavLink>
      <NavLink to ='/friendsList'>Friends</NavLink>
      <button onClick={onLogout}>Log out</button>
      </nav>

      <Route exact path='/' component={Login} />
      <Route exact path='/friendsList' 
      render={props => withAthCheck(FriendsList, props)}/>
    </div>
  );
}

function withAthCheck(Component, props) {
  if (localStorage.getItem('payload')) {
    return <Component {...props} />
  }
  return <Redirect to='/' />;
}

export default withRouter(App);
