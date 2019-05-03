import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import Grid from '@material-ui/core/Grid';
import StatTable from './StatTable.js';
class Stats extends Component {
    constructor() {
        super()
    }
    render() {
        let leftImage = "courtLeft";
        let rightImage = "courtRight";
        let oldWolves;
        let newWolves;
        this.props.reduxStore.draftLotteryOrder.map(team => {
            if ((team.name == "Minnesota") && (team.place == 1 || team.place == 2 || team.place == 3
                || team.place == 4)) {
                    rightImage = "karlSmirk";
                    leftImage = "karlBBQ";
                    oldWolves = <div className="oldWolves"></div>;
                    newWolves = <div className="newWolves"></div>
            }
        })
        return (
            <div>
                <Header />
                <Grid className="container"
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start">
                    <Grid item xs>
                        {newWolves}
                        <div className={leftImage}></div>
                    </Grid>
                    <Grid item xs>
                        <StatTable />
                    </Grid>
                    <Grid item xs>
                        {oldWolves}
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
export default connect(mapStateToProps)(Stats);