import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import StatOption from './StatOption.js';
import '../LotteryTeams/LotteryTeams.css'
import axios from 'axios';
class StatsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topFour: [],
        }
    }

    componentDidMount() {
        let action = { type: 'ORIGINAL_ORDER' }
        this.props.dispatch(action);
        let topFour = { type: 'GET_TOP_FOUR' }
        this.props.dispatch(topFour);
    }

// getTopFour = () => {
//     axios({
//         method: 'GET',
//         url: '/api/stats/topFour'
//     }).then((response)=>{
//         this.setState({
//             topFour: response.data
//         });   
//     }).catch((error)=>{
//         console.log('error in topfour', error);
//     })
// }
    

    render() {
        let counter = 0;
        let tableContent = this.props.reduxStore.topFour.map(team => {
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
                            <TableCell><h3><StatOption /></h3></TableCell>
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