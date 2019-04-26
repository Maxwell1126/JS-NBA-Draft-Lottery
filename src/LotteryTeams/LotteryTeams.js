import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LotteryTeams.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import SimLotteryButton from '../SimLotteryButton/SimLotteryButton.js';

class LotteryTeams extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let action = { type: 'DRAFT_ORDER' }
        this.props.dispatch(action);
    }

    render() {
        
       let tableContent = this.props.reduxStore.draftLotteryOrder.map(team => {
           let jumpedFell = <b>{team.place} </b>;
            if ((team.place - team.seed) * (-1) > 0) {
                jumpedFell = <b className="green"> (+{(team.place - team.seed) * (-1)})</b>
            } else if ((team.place - team.seed) * (-1) < 0) {
                jumpedFell = <b className="red"> (-{(team.place - team.seed) * 1})</b>
            }else{
                jumpedFell = "";
            }
            
            return <TableRow>
                <TableCell className= "tableCell"><b>{team.place}</b>{jumpedFell}</TableCell>
                <TableCell className="tableCell">{team.name}</TableCell>
            </TableRow>
        })

        return (
            
                <Grid className="tableContainer"
                    container xs
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <Grid item xs className = "simButton">
                <SimLotteryButton />
                </Grid>
                <Table item xs className="lottoTable">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Pick</b></TableCell>
                            <TableCell><b>Team</b></TableCell>
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
export default connect(mapStateToProps)(LotteryTeams);