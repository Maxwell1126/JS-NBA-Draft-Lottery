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
        let action = { type: 'GET_LATEST_SIMULATION' }
        this.props.dispatch(action);
    }

    render() {
        let playerImage
        this.props.reduxStore.draftLotteryOrder.map(team => {
            if ((team.name == "Minnesota") && (team.place == 1)){
                    playerImage = "zionImage";
                } 
            else if ((team.name == "Minnesota") && (team.place == 2)){
                    playerImage = "morantImage";
                }
            })
       let tableContent = this.props.reduxStore.draftLotteryOrder.map(team => {
           let jumpedFell = <h1>{team.place} </h1>;
            if ((team.place - team.seed) * (-1) > 0) {
                jumpedFell = <b className="green"> (+{(team.place - team.seed) * (-1)})</b>
            } else if ((team.place - team.seed) * (-1) < 0) {
                jumpedFell = <b className="red"> (-{(team.place - team.seed) * 1})</b>
            }else{
                jumpedFell = "";
            }
            
           return <TableRow >
               <TableCell className="tableCell"><h3>{team.name}</h3></TableCell>
               <TableCell className="tableCell"><h3>{team.place}{jumpedFell}</h3></TableCell>
            </TableRow>
        })

        return (
            
                <Grid className="tableContainer"
                    container xs
                    direction="column"
                    justify="center"
                    alignItems="center">
                <Grid item xs className = "simButton">
                <SimLotteryButton />
                </Grid>
     
                <Table item xs >               
                    <TableHead>
                        <TableRow>
                            <TableCell><h3>Team</h3></TableCell>
                            <TableCell><h3>Pick</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={playerImage}>
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