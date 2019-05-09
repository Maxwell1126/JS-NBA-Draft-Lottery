import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatOption extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let action = { type: 'GET_STATS' }
        this.props.dispatch(action);
    }

    render() {
        return (
            <select>
                <option value='' disabled selected > Select a Stat</option>
                {this.props.reduxStore.stats.map(stat => {
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