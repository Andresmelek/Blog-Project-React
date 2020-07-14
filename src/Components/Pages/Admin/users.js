import React, { Component } from 'react';
import TableView from '../../Common/tableView';
import {connect} from 'react-redux';   
import * as adminActions from '../../../store/actions/adminActions'; 


const columns = [
    {label: 'ID', name: 'id'},
    {label: 'Name', name: 'name'},
    {label: 'Email', name: 'email'},

]

class Users extends Component {

    componentDidMount(){
        this.props.getUsers(this.props.auth.token);

    }
    render(){

        const users = this.props.admin.users
        return (
            <div>
                <h1>Users</h1>
                <TableView>
                    columns={columns}
                    rows={users}
                </TableView>
            </div>
        )
    }
}

//Selects the data to be stored and return the data with the component needed
const mapStateToProps = state => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}


//Dispatch the data stored
const mapDispatchToProps = dispatch => {
    return {
        getUsers: (token) => {
            dispatch(adminActions.getUsers(token));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);