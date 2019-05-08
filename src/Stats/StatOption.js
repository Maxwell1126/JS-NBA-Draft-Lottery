import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class StatOption extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats: [],
        }
    }

    componentDidMount() {
        this.getStatsNames();
    }

    getStatsNames = () => {
        axios({
            method: 'GET',
            url: '/api/stats',
        }).then((response) => {
            console.log('response',response);
            
            this.setState({
                stats: response.data
            })
        }).catch((error) => {
            console.log('error', error);
            
        })
    }

    render() {
        return (
                <select>
                    <option value='' disabled selected > Select a Stat</option>
                    {this.state.stats.map(stat =>{
                        return <option>{stat.name}</option>
                    })}
                </select>
        )
}
}

    const mapStateToProps = reduxStore => ({
        reduxStore
    });
    export default connect(mapStateToProps)(StatOption);