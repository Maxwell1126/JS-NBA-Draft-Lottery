import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
        let total = { type: 'GET_TOTAL_SIMS'}
        this.props.dispatch(total);
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

resetSimulations = () => {
    let deleteSims = { type: 'DELETE_SIMS' }
    this.props.dispatch(deleteSims);
    let originalOrder = { type: 'ORIGINAL_ORDER' }
    this.props.dispatch(originalOrder);
    let resetCount = { type: 'RESET_TOTAL_SIMS' }
    this.props.dispatch(resetCount);
    let resetStats = { type: 'UNSELECTED_STATS' }
    this.props.dispatch(resetStats);
    let total = { type: 'GET_TOTAL_SIMS' }
    this.props.dispatch(total);
}
    render() {

        let statSelector = <select onChange = {this.getStatByType}>
            <option value='' disabled selected > Select a Stat</option>
            {this.props.reduxStore.stats.map(stat => {
                return <option value = {stat.id}>{stat.name}</option>
            })}
        </select>;
        let tableContent =
            this.props.reduxStore.selectedStat.map(team => {
                return <TableRow >
                    <TableCell className="tableCell"><h3>{team.id}. {team.name}</h3></TableCell>
                    <TableCell className="tableCell">
                        <h3>{team.count}</h3>
                    </TableCell>
                </TableRow>
            })
        let simTotal;    
        if(parseInt(this.props.reduxStore.totalSims.count == NaN)){
            simTotal = <h3>Simulated {0} Times</h3>
        }else{
            simTotal = <h3>Simulated {parseInt(this.props.reduxStore.totalSims.count)} Times</h3>
        }
          
        
        return (
            <Grid className="tableContainer"
                container xs
                direction="column"
                justify="center"
                alignItems="center">
                <Grid className = "counter" item xs >
                    <tr > <td className="tableData">{simTotal} </td>
                    <td className="tableData">
                    <Button onClick = {this.resetSimulations} variant="outlined" >RESET</Button>
                    </td></tr>
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