import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect, Switch,} from 'react-router-dom';
import Home from './Home/Home.js';
import Stats from './Stats/Stats.js';
import Header from './Header/Header.js';
import './index.css';
class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div >
        
        <Router>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route 
              exact path = "/home"
              component = {Home}/>
            <Route
              exact path="/stats"
              component={Stats} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxStore
});
export default connect(mapStateToProps)(App);
