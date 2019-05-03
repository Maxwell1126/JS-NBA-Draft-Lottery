import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props) => (

    <div>
        <Link to="/home">
            Home
        </Link>
    </div>
);

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(Nav);