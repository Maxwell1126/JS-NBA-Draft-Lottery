import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../LotteryTeams/LotteryTeams.css';
import Grid from '@material-ui/core/Grid';

class InfoContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div></div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(InfoContent);