import React, { Component } from 'react';
import { connect } from 'react-redux';
import LotteryTeamRow from './LotteryTeamRow';
import SimLotteryButton from '../SimLotteryButton/SimLotteryButton';

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
            <div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Team</th>
                                <th>Original Seed</th>
                                <th>Jumped/Fell</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.reduxStore.draftLotteryOrder.map(team => {
                                return <tr>
                                    <td>{team.place}</td>
                                    <td>{team.name}</td>
                                    <td>{team.seed}</td>
                                    <td>{(team.place - team.seed) * (-1)}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <SimLotteryButton />
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(LotteryTeams);