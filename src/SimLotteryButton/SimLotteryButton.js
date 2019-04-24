import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class SimLotteryButton extends Component {
    constructor(props) {
        super(props)
    }

    runLottery = (event) => {
        let first = "";
        let second = "";
        let third = "";
        let fourth = "";
        while (fourth == "") {
            let winner = {};
            let winningNumber = (Math.floor(Math.random() * 1000) + 1);

            if (winningNumber < 141) {
                winner = { name: "New York", seed: 1 };
            } else if (winningNumber >= 141 && winningNumber <= 278) {
                winner = { name: "Cleveland", seed: 2 };
            } else if (winningNumber >= 281 && winningNumber <= 420) {
                winner = { name: "Phoenix", seed: 3 };
            } else if (winningNumber >= 421 && winningNumber <= 545) {
                winner = { name: "Chicago", seed: 4 };
            } else if (winningNumber >= 546 && winningNumber <= 650) {
                winner = { name: "Atlanta", seed: 5 };
            } else if (winningNumber >= 651 && winningNumber <= 740) {
                winner = { name: "Washington", seed: 6 };
            } else if (winningNumber >= 741 && winningNumber <= 815) {
                winner = { name: "New Orleans", seed: 7 };
            } else if (winningNumber >= 816 && winningNumber <= 875) {
                winner = { name: "Atlanta", seed: 8 };
            } else if (winningNumber >= 876 && winningNumber <= 920) {
                winner = { name: "Memphis", seed: 9 };
            } else if (winningNumber >= 921 && winningNumber <= 950) {
                winner = { name: "Minnesota", seed: 10 };
            } else if (winningNumber >= 951 && winningNumber <= 970) {
                winner = { name: "Los Angeles", seed: 11 };
            } else if (winningNumber >= 971 && winningNumber <= 985) {
                winner = { name: "Charlotte", seed: 12 };
            } else if (winningNumber >= 986 && winningNumber <= 995) {
                winner = { name: "Miami", seed: 13 };
            } else if (winningNumber >= 996 && winningNumber <= 1000) {
                winner = { name: "Boston", seed: 14 };
            }

            // determine first place.
            if (first == "") {
                first = winner;
                // determine second place.
                // determine second place or check to see that it has been fulfilled.
            } else if (first != "" && second == "") {
                // determine if the winner has already won a higher place. Re-roll if that
                // happens.
                if (first.seed != winner.seed) {
                    second = winner;
                }

                // determine third place.
            } else if (first != "" && second != "" && third == "") {
                // determine if the winner has already won a higher place. Re-roll if that
                // happens.
                if (first.seed != winner.seed && second.seed != winner.seed) {
                    third = winner;
                }

                // determine fourth place.
            } else if (first != "" && second != "" && third != "" && fourth == "") {
                // determine if the winner has already won a higher place. Re-roll if that
                // happens.
                if (first.seed != winner.seed && second.seed != winner.seed && third.seed != winner.seed) {
                    fourth = winner;
                }
            }
        }

        let action = {
            type: 'SET_ORDER',
            payload: {
                first: first,
                second: second,
                third: third,
                fourth: fourth
            }
        }
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <Button variant="outlined" onClick={this.runLottery}>Simulate Draft Lottery</Button>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(SimLotteryButton);
