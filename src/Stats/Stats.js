import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import StatTable from './StatTable.js';
import '../Home/Home.css';
import '../index.css';
class Stats extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        let action = { type: 'GET_LATEST_SIMULATION' }
        this.props.dispatch(action);
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
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start">
                    <Grid item xs className="leftImageContainer">
                        {newWolves}
                        <div className={leftImage}></div>
                    </Grid>
                    <Grid item xs>
                        <StatTable />
                    </Grid>
                    <Grid item xs className="rightImageContainer">
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