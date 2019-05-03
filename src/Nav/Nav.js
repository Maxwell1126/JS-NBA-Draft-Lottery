import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
class Nav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let navStyle = "nav";
        this.props.reduxStore.draftLotteryOrder.map(team => {
            if ((team.name == "Minnesota") && (team.place == 1 || team.place == 2 || team.place == 3
                || team.place == 4)) {
                navStyle = "wolvesNav";
                return navStyle;
            }
        })
        return (
            <div >
                <Link className={navStyle} to="/home">
                    Home
                </Link>
            </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(Nav);