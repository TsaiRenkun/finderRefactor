import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar.js';
import Useritem from './components/users/Useritem.js';

class App extends Component {

  render(){
    return(
      <div className = 'App'>
        <Navbar />
        <Useritem />
      </div>
    )
  }
}

export default App;
