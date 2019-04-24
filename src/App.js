import React, { Component } from 'react';
import './App.css';
import LotteryTeams from './LotteryTeams/LotteryTeams.js';
import Header from './Header/Header.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LotteryTeams />
      </div>
    );
  }
}

export default App;
