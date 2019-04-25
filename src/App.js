import React, { Component } from 'react';
import './App.css';
import './index.css';
import LotteryTeams from './LotteryTeams/LotteryTeams.js';
import SimLotteryButton from './SimLotteryButton/SimLotteryButton.js';
import Header from './Header/Header.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SimLotteryButton />
        <LotteryTeams />   
      </div>
    );
  }
}

export default App;
