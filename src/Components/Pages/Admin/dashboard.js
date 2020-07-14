import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


//Class that renders the login page when the admin is logged in
class Dashboard extends Component {
    render() {
        return(
    <h1>You are logged in with token {this.props.auth.token}</h1>
        )
    }
}


//Selects the data to be stored and return the data with the component needed
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}


//Dispatch to the store
const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Dashboard));