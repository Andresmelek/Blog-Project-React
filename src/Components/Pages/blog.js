import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import Header from '../Common/Header';
import image from '../Assets/img/about.jpg';
import * as SiteActions from '../../store/actions/siteActions';
import BlogItem from '../Common/blogitem';



//Class that renders the blog page
class Blog extends Component {

    //insert the data into
    componentDidMount(skip) {
            this.props.getPosts(0);
        
    }

    render () {

        return (
            <div>
            <Header
          title="Read the stories"
          subtitle="BLOG"
          showButton={false}
          img={image}
      />
      <section className="bg-light" id="portfolio">
      <div className="container">
      <div className="row">
         {this.props.site.posts ?
            this.props.site.posts.length > 0 ?
            this.props.site.posts.map((post, index) => {
                return <BlogItem post={post} key={index}/>
            })
            : null
            : null
        }
             </div>
             </div>
            </section>
            </div>
        )
    }
}


//Selects the data to be stored and return the data with the component needed
const mapStateToProps = state => ({
    site: state.site
})

////Dispatch the data
const mapDispatchToProps = dispatch => ({
    getPosts: skip => {
        dispatch(SiteActions.getPosts(skip));
    }

})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog));