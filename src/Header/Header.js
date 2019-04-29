import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let headerStyle = "head";
        this.props.reduxStore.draftLotteryOrder.map(team => {
            if (team.name == "Minnesota" && (team.place == 1 || team.place == 2)){
                return headerStyle = "wolves";
            } else if (team.name != "Minnesota" && team.place == (1 || 2)){
               return  headerStyle = "head";
            }
        })
        return(
            <header className = {headerStyle}>
                <h1>Draft Lottery Simulator</h1>
            </header>  
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Header);