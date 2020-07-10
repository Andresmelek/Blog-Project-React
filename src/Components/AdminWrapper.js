import React, { Component } from 'react';
import '../Components/css/admin.css'

class AdmindWrapper extends Component {
    render() {
        return(
            <div id="admin-page">
                {this.props.children}
            </div>
        )
    }
}

export default AdmindWrapper;