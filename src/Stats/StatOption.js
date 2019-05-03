import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatOption extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <select>
                <option value='' disabled selected > Select a Stat</option>
            </select>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});
export default connect(mapStateToProps)(StatOption);