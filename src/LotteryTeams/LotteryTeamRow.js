import React, { Component } from 'react';

class LotteryTeamRow extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <tr>
                <td>{this.props.team.place}</td>
                <td>{this.props.team.name}</td>
            </tr>
        )
    }
}

export default LotteryTeamRow;