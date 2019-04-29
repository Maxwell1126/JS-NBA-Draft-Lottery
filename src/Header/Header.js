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
            if ((team.name == "Minnesota") && (team.place == 1 || team.place == 2 || team.place == 3
                || team.place == 4)){
                headerStyle= "wolves";
                return headerStyle;
            } 
        })
        return(
            <header className={headerStyle}>
                <h1>Draft Lottery Simulator</h1>
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Header);