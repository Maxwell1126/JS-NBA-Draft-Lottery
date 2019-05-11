import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import '../LotteryTeams/LotteryTeams.css'
class StatsTable extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let order = { type: 'ORIGINAL_ORDER' }
        this.props.dispatch(order);
        let unselectedStats = { type: 'UNSELECTED_STATS' }
        this.props.dispatch(unselectedStats);
        let stats = { type: 'GET_STATS' }
        this.props.dispatch(stats);
    }

getStatByType = (event) => {
    
    if (event.target.value == 1 || event.target.value == 2 ||
         event.target.value == 3 || event.target.value == 4){
        let places = { type: 'GET_PLACES', payload: {place: event.target.value}}
        this.props.dispatch(places);
    } else if (event.target.value == 5) {
        let topFour = { type: 'GET_TOP_FOUR' }
        this.props.dispatch(topFour);
    } else if (event.target.value == 6) {
        let modePlace = { type: 'GET_MODE' }
        this.props.dispatch(modePlace);
    }
}
    render() {

        let statSelector = <select onChange = {this.getStatByType}>
            <option value='' disabled selected > Select a Stat</option>
            {this.props.reduxStore.stats.map(stat => {
                return <option value = {stat.id}>{stat.name}</option>
            })}
        </select>;
        let counter = 0;
        let tableContent =
            this.props.reduxStore.selectedStat.map(team => {
                return <TableRow >
                    <TableCell className="tableCell"><h3>{team.id}. {team.name}</h3></TableCell>
                    <TableCell className="tableCell"><h3>{team.count}</h3></TableCell>
                </TableRow>
            })

        return (
            <Grid className="tableContainer"
                container xs
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item xs className="counter">
                    <h3>Simulated {counter} Times</h3>
                    <h6>{}</h6>
                </Grid>
                <Table item xs >
                    <TableHead>
                        <TableRow>
                            <TableCell><h3>Team</h3></TableCell>
                            <TableCell><h3>{statSelector}</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableContent}
                    </TableBody>
                </Table>
            </Grid>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(StatsTable);