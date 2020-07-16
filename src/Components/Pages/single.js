import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as siteActions from '../../store/actions/siteActions';
import Header from '../Common/Header';
import API from '../../utils/api';
import image from '../Assets/img/about.jpg';




class Single extends Component {
    render(){
        console.log('Helos',this.props.site.post)
        return (
            <div>
            <Header
            title={this.props.site.post.slug}
            subtitle={this.props.site.post.title}
            showButton={false}
            img={image}
      />
            <h1>Single</h1>
            </div>
        )
    }
}



const mapStateToProps = state => ({
   auth: state.auth,
   site: state.site 

})

const mapDispatchToProps = dispatch => ({
    

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Single));

