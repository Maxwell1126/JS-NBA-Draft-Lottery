import React, { Component } from 'react';

class SimLotteryButton extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstPlace: "",
            secondPlace: "",
            thirdPlace: "",
            fourthPlace: "",
            win:"",

        }
    }

    runLottery = (event) => {
        
        let first= "";
        let second= "";
        let third= "";
        let fourth= "";
        // let winner="";
        // let winningNumber = (Math.floor(Math.random() * 1000) + 1);
        
        while (fourth == "") {
            let winner = "";
            let winningNumber = (Math.floor(Math.random() * 1000) + 1);
            // console.log('winning number', winningNumber);
            // console.log('winner', winner);
            
            if (winningNumber < 141) {
                winner = "New York";
            } else if (winningNumber >= 141 && winningNumber <= 278) {
                winner = "Cleveland";
            } else if (winningNumber >= 281 && winningNumber <= 420) {
                winner = "Phoenix";
            } else if (winningNumber >= 421 && winningNumber <= 545) {
                winner = "Chicago";
            } else if (winningNumber >= 546 && winningNumber <= 650) {
                winner = "Atlanta";
            } else if (winningNumber >= 651 && winningNumber <= 740) {
                winner = "Washington";
            } else if (winningNumber >= 741 && winningNumber <= 815) {
                winner = "New Orleans";
            } else if (winningNumber >= 816 && winningNumber <= 875) {
                winner = "Atlanta";
            } else if (winningNumber >= 876 && winningNumber <= 920) {
                winner = "Memphis";
            } else if (winningNumber >= 921 && winningNumber <= 950) {
                winner = "Minnesota";
            } else if (winningNumber >= 951 && winningNumber <= 970) {
                winner = "Los Angeles";
            } else if (winningNumber >= 971 && winningNumber <= 985) {
                winner = "Charlotte";
            } else if (winningNumber >= 986 && winningNumber <= 995) {
                winner = "Miami";
            } else if (winningNumber >= 996 && winningNumber <= 1000) {
                winner = "Boston";
            }
        console.log('winner', winner);
        
       
            // determine first place.
            if (first == "") {
                first = winner;
                this.setState({
                    firstPlace: first,
                })
                // determine second place.
                // determine second place or check to see that it has been fulfilled.
            } else if (first!= "" && second == "") {
                // determine if the winner has already won a higher place. Re-roll if that
                // happens.
                if (first != winner) {
                    second = winner;
                    this.setState({
                        secondPlace: second,
                    })
                }

                // determine third place.
            } else if (first != "" && second != "" && third == "") {
                // determine if the winner has already won a higher place. Re-roll if that
                // happens.
                if (first != winner && second != winner) {
                    third = winner;
                    this.setState({
                        thirdPlace: third,
                    })
                }

                // determine fourth place.
            } else if (first != "" && second != "" && third != "" && fourth == "") {
                // determine if the winner has already won a higher place. Re-roll if that
                // happens.
                if (first != winner && second != winner && third != winner) {
                    fourth = winner;
                    this.setState({
                        fourthPlace: fourth,
                    })
                }
            }
        }
        
    }

    render(){
        return(
            <div>
            <button onClick = {this.runLottery}>Simulate Draft Lottery</button>
            <p>first</p>{JSON.stringify(this.state.firstPlace)}
                <p>second</p>{JSON.stringify(this.state.secondPlace)}
                <p>third</p>{JSON.stringify(this.state.thirdPlace)}
                <p>fourth</p>{JSON.stringify(this.state.fourthPlace)}
                {/* {JSON.stringify(this.state.win)} */}
            </div>
        )
    }
}

export default SimLotteryButton;