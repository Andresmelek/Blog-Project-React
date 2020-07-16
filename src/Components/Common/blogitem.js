import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as siteActions from '../../store/actions/siteActions';


//Class that renders  the portfolio items in the Portfolio page
class BlogItem extends Component {
    render(){
        return (
            <div className="col-md-4 col-sm-6 portfolio-item">
            <Link className="portfolio-link" 
             to={`/blog/${this.props.post.slug}`}
             onClick={e => this.props.setPostData(this.props.post)} >
                <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                </div>
                </div>
                <img className="img-fluid" src={this.props.image} alt=""/>
                </Link>
            <div className="portfolio-caption">
                <h4>{this.props.post.title}</h4>
                <p className="text-muted">{this.props.post.slug}</p>
            </div> 
            </div> 
            
        )
    }
}


const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => ({
    setPostData: post => {
        dispatch(siteActions.setPostData(post));
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(BlogItem));
