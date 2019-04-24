import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LotteryTeams.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class LotteryTeams extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let action = { type: 'DRAFT_ORDER' }
        this.props.dispatch(action);
    }

    render() {
        return (
            <div className="tableContainer">
                <Table className="lottoTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Place</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell>Original Seed</TableCell>
                            <TableCell>Jumped/Fell</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxStore.draftLotteryOrder.map(team => {
                            return <TableRow>
                                <TableCell>{team.place}</TableCell>
                                <TableCell>{team.name}</TableCell>
                                <TableCell>{team.seed}</TableCell>
                                <TableCell>{(team.place - team.seed) * (-1)}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(LotteryTeams);