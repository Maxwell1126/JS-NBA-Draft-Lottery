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

class StatsTable extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let action = { type: 'ORIGINAL_ORDER' }
        this.props.dispatch(action);
    }

    render() {
        let counter = 0;
        let tableContent = this.props.reduxStore.draftLotteryOrder.map(team => {
            return <TableRow >
                <TableCell className="tableCell"><h3>{team.seed}. {team.name}</h3></TableCell>
                <TableCell className="tableCell"><h3></h3></TableCell>
            </TableRow>
        })

        return (

            <Grid className="tableContainer"
                container xs
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item xs >
                <h3>Simulated {counter} Times</h3>
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