import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <header className = "head">
                <h1>Draft Lottery Simulator</h1>
            </header>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
});
export default connect(mapReduxStoreToProps)(Header);