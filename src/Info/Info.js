import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Home/Home.css';
import '../index.css';
import Grid from '@material-ui/core/Grid';
class Info extends Component {
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
                        <div>
                        
                        <ul>
                                <h1>Draft Lottery Description</h1>
                            <li>
                                The Draft Lottery is a random drawing between the non-playoff teams of the NBA to determine who
                                gets the right to picks one through four. Each team gets a different percent of chance to win the lottery based
                                on how poorly they performed.
                            </li>
                            <li>
                                The NBA is comprosied of thirty teams and has two conferences, the East and West.
                                Eight teams from each conference qualify for the postseason playoffs based on their records.
                                The remaining seven teams from each conference are ordered by their record, 
                                with the worst team being first, to comprise the Draft Lottery pool.
                            </li>
                            <li>
                                The lottery begins by determining who gets the first overall pick. a random number is drawn and who ever
                                owns the number then owns the first overall pick. The team the number belonged to can no longer win any other picks.
                                This process is then repeated for picks two through three. Once the top four picks have been determined, the remaining
                                ten teams are given picks five through fourteen in order of their record with the worst team getting the fifth pick.
                            </li>
                        </ul>
                        </div>
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
export default connect(mapStateToProps)(Info);