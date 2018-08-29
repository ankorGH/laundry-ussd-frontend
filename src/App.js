import React, { Component } from 'react';
import './App.css';
import UserDetailsContainer from "./components/container/UserDetailsContainer"
import Header from "./components/presentational/Header"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <UserDetailsContainer />
      </div>
    );
  }
}

export default App;
