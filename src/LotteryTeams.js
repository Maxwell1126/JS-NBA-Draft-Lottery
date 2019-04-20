import React, { Component } from 'react';
import LotteryTeamRow from './LotteryTeamRow';

class LotteryTeams extends Component {
constructor(){
    super()
    this.state = {
        lotteryTeams:
            [{name: "New York", seed: 1, place: 1},
            { name: "Cleveland", seed: 2, place: 2 },
            { name: "Phoenix", seed: 3, place: 3 },
            { name: "Chicago", seed: 4, place: 4 },
            { name: "Atlanta", seed: 5, place: 5 },
            { name: "Washington", seed: 6, place: 6 },
            { name: "New Orleans", seed: 7, place: 7 },
            { name: "Memphis", seed: 8, place: 8 },
            { name: "Atlanta", seed: 9, place: 9 },
            { name: "Minnesota", seed: 10, place: 10 },
            { name: "Los Angeles", seed: 11, place: 11 },
            { name: "Charlotte", seed: 12, place: 12 },
            { name: "Miami", seed: 13, place: 13 },
            { name: "Boston", seed: 14, place: 14 }],
    }
}
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>   
                        {this.state.lotteryTeams.map(team =>
                            <LotteryTeamRow team={team}/>
                        )}
                </tbody>
            </table>
        )
    }
}

export default LotteryTeams;