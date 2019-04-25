import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LotteryTeams.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
// import SimLotteryButton from '../SimLotteryButton/SimLotteryButton.js';

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
                jumpedFell = <p className="place"><b>{team.place}</b><b className="white">123</b><b className="green"> (+{(team.place - team.seed) * (-1)})</b></p>
            } else if ((team.place - team.seed) * (-1) < 0) {
                jumpedFell = <p className="place"><b>{team.place}</b><b className="white">123</b><b className="red">  (-{(team.place - team.seed) * 1})</b></p>
            }else{
                jumpedFell = <p className="place"><b>{team.place}</b><b className="white">(+0)</b></p>;
            }
            
            return <TableRow>
                <TableCell>{jumpedFell}</TableCell>
                <TableCell>{team.name}</TableCell>
            </TableRow>
        })

        return (
            <div className="tableContainer">
                <Grid
                    container xs
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                {/* <SimLotteryButton /> */}
                <Table item xs className="lottoTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pick</TableCell>
                            <TableCell>Team</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableContent}
                    </TableBody>
                </Table>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(LotteryTeams);