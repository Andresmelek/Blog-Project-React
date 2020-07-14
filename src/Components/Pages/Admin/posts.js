import React, { Component } from 'react';
import TableView from '../../Common/tableView';
import {connect} from 'react-redux';   
import * as adminActions from '../../../store/actions/adminActions'; 
import {withStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';


// Heads of the table
const columns = [
    {label: 'ID', name: 'id'},
    {label: 'Title', name: 'title'},

]

//Style for the edit button
const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: '50px',
        right: '50px'
    }
})


//Class that render the table with the posts when the admin is logged in
class Posts extends Component {

    componentDidMount(){
        this.props.getPosts(this.props.auth.token);
    }
    render(){
        const posts = this.props.admin.posts;
        const { classes } = this.props;
        return (
            <div>
                <h1>Posts</h1>
                <TableView>
                    columns={columns}
                    rows={posts}
                </TableView>

                <Fab component={RouterLink} to="/login/posts/add" color="secondary" arial-label="Add" className={classes.fab}>
                    <EditIcon/>
                </Fab>
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

//Dispatch the stored data 
const mapDispatchToProps = dispatch => {
    return {
        getPosts: token => {
            dispatch(adminActions.getPosts(token));
        }
    }

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Posts));