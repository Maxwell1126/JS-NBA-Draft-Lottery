import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

class StatsTable extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let action = { type: 'DRAFT_ORDER' }
        this.props.dispatch(action);
    }

    render() {

        return (

            <Grid className="tableContainer"
                container xs
                direction="column"
                justify="center"
                alignItems="center">
                <Table item xs >
                    <TableHead>
                        <TableRow>
                            <TableCell><h3>Team</h3></TableCell>
                            <TableCell><h3>Stat</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell className="tableCell"><h3>{team.name}</h3></TableCell>
                            <TableCell className="tableCell"><h3></h3></TableCell>
                        </TableRow>
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