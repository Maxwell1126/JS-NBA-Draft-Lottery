import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import './index.css';
import LotteryTeams from './LotteryTeams/LotteryTeams.js';
// import SimLotteryButton from './SimLotteryButton/SimLotteryButton.js';
import Header from './Header/Header.js';
import Grid from '@material-ui/core/Grid';
class App extends Component {
  constructor(){
    super()
  }
  render() {
    let leftImage = "courtLeft";
    let rightImage = "courtRight";
    this.props.reduxStore.draftLotteryOrder.map(team => {
      if ((team.name == "Minnesota") && (team.place == 1 || team.place == 2 || team.place == 3
        || team.place == 4)) {
        rightImage = "karlSmirk";
        leftImage = "karlBBQ";
      }
    })
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
        <div className={leftImage}></div>
        </Grid>
        {/* <SimLotteryButton /> */}
            <Grid item xs className = "lottoTable">
        <LotteryTeams /> 
              </Grid>
              <Grid item xs>
          <div className={rightImage}></div> 
              </Grid>
        </Grid> 
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});
export default connect(mapStateToProps)(App);
