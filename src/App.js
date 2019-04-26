import React, { Component } from 'react';
import './App.css';
import './index.css';
import LotteryTeams from './LotteryTeams/LotteryTeams.js';
// import SimLotteryButton from './SimLotteryButton/SimLotteryButton.js';
import Header from './Header/Header.js';
import Grid from '@material-ui/core/Grid';
class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Grid className="container"
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs>
        <div className="courtLeft"></div>
        </Grid>
        {/* <SimLotteryButton /> */}
            <Grid item xs>
        <LotteryTeams /> 
              </Grid>
              <Grid item xs>
          <div className="courtRight"></div> 
              </Grid>
        </Grid> 
      </div>
    );
  }
}

export default App;
