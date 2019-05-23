import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Home/Home.css';
import '../index.css';
import Grid from '@material-ui/core/Grid';
class Info extends Component {
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

                <Grid className = "container"
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start">
                    <Grid item xs className = "leftImageContainer">
                        {newWolves}
                        <div className={leftImage}></div>
                    </Grid>
                    <Grid item xs className="content">
                    <div className="contentContainer">
                        <h1>About the App</h1>
                        <p><strong>
                            The Home Page
                        </strong></p>
                        <li></li>
                    </div>
                    <div className="contentContainer">
                                <h1>Draft Lottery Description</h1>

                                <li>
                                    The Draft Lottery is a random drawing between the non-playoff teams of the NBA to determine which teams
                                    get the right to one of the top four picks. Each team gets a certain percent of chance to win the lottery based
                                    on how poorly they performed in that year's regular season.
                            </li>
                                <li>
                                    The NBA is comprosied of thirty teams and has two conferences, the East and West.
                                    Eight teams from each conference qualify for the postseason playoffs based on their records.
                                    The remaining seven teams from each conference are ordered by their record,
                                    with the worst team being first, to comprise the Draft Lottery pool.
                            </li>
                                <li>
                                    The lottery begins by determining who gets the first overall pick. a random number is drawn and who ever
                                    owns the number then owns the first overall pick. The team the number belongs to can no longer win any other picks.
                                    This process is then repeated for picks two through four. Once the top four picks have been determined, the remaining
                                    ten teams are given picks five through fourteen in order of their record with the worst team getting the fifth pick.
                            </li>
                                <p><strong>
                                    The odds for each team to receive every pick are as follows:
    
                            </strong></p>

                        </div>
                    <Grid >
                        <div className="draftOdds"></div>
                        <h6>Image Credit: https://towardsdatascience.com/what-are-the-odds-a-statistical-analysis-of-tanking-in-the-nba-2c5fe228cd67</h6>
                    </Grid>
                    <div className="contentContainer">
                    <h1>Trades</h1>
                    <li>
                        It is common in the NBA for teams to trade players to other teams. In these trades, it is also common to exchange or trade away future draft picks.
                        When draft picks are traded away, they are often "protected" to some degree. For example, a pick can be traded away and be "top ten protected".
                        This means that if the draft pick falls in the top ten after the draft lottery concludes, the pick returns to the original team. Protections
                        usually end after a number of years, and diminish in number of selections they protect over time as well.
                    </li>
                    <li> This year's draft lottery does feature a few teams that could
                            lose their pick if it falls out of their protected range.
                    </li>
                        <p><strong>The teams whose picks are in jeoprady of being given to another team because of a trade are as follows:</strong></p>

                        <li>Memphis' pick is top 8 protected. It will otherwise go to Boston. Memphis' pick enters the lottery at seed 8.</li>

                        <li>Dallas' pick is top 4 protected. It otherwise will go to Atlanta. Dallas' pick enters the lottery at seed 9.</li>

                        <li>Boston's pick was traded to them by Sacramento. It is protected 2-60. If their pick at the end of the lottery is 1 overall, it will go to Philadelphia.
                            Boston's pick enters the lottery at seed 14.
                        </li>
                        

                    
                    </div>
                    </Grid>
                    
                <Grid item xs className="rightImageContainer">
                        {oldWolves}
                        <div className={rightImage}></div>
                    </Grid>
                    
                </Grid>
        );
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(Info);