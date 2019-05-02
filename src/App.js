import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect, Switch,} from 'react-router-dom';
import Home from './Home/Home.js';
import './index.css';
class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div >
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route 
              exact path = "/home"
              component = {Home}/>
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
