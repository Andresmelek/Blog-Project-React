import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom'

//Icons
import FaceIcon from '@material-ui/icons/Face';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';

//Function that list items for the side Bar when the admin is logged in the login page
const ListItemLink = props => {
    return (
        <ListItem button component={RouterLink} {...props} />
    )
}

//class that renders the icons in the sideBar when the admin is logged inlogin Page
class SideBar extends Component {
    render(){
        return (
        <List>
            <ListItemLink to='/login'>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
            </ListItemLink>
            <ListItemLink to='/login/users'>
                    <ListItemIcon>
                        <FaceIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Users"/>
            </ListItemLink>
            <ListItemLink to='/login/posts'>
                    <ListItemIcon>
                        <FileCopyIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Post"/>
            </ListItemLink>
           
        </List>

    )
    }
}

export default SideBar;

