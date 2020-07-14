import React, { Component } from 'react';
import '../Components/css/admin.css';



//Class that renders the login window
class LoginWrapper extends Component {
    render() {
        return(
            <div id="admin-page">
               
                {this.props.children}
            </div>
        )
    }
}

export default LoginWrapper;