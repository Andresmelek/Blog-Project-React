import React, { Component } from 'react';
import PageWrapper from './Components/pageWrapper';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

//Pages
import Home from './Components/Pages/home';
import About from './Components/Pages/about';
import Services from './Components/Pages/services';
import Portfolio from './Components/Pages/portfolio';
import Team from './Components/Pages/team';
import Contact from './Components/Pages/contacts';
import AdminWrapper from './Components/AdminWrapper';
import LoginWrapper from './Components/loginWrapper';
import Login from './Components/Pages/login';


//Admins Pages
import Dashboard from './Components/Pages/Admin/dashboard';
import Users from './Components/Pages/Admin/users';
import Posts from './Components/Pages/Admin/posts';
import AddPosts from './Components/Pages/Admin/addPosts'


//
class App extends Component {
  render(){
  return (
    <Router>

      <Route 
        path="/login/users"
        render = {props => {
          console.log(props)
         return (
           <div>
          {this.props.auth.token?
           <AdminWrapper>
             <Users/>
           </AdminWrapper>
          :
           <LoginWrapper>
             <Login/>
           </LoginWrapper>
          }
          </div>
       
         )
        }}
      />

      <Route 
        exact={true}
        path="/login/posts"
        render = {props => {
          console.log(props)
         return (
           <div>
          {this.props.auth.token?
           <AdminWrapper>
             <Posts/>
           </AdminWrapper>
          :
           <LoginWrapper>
             <Login/>
           </LoginWrapper>
          }
          </div>
       
         )
        }}
      />

        <Route 
        path="/login/posts/:view"
        render = {props => {
          console.log(props)
         return (
           <div>
          {this.props.auth.token?
           <AdminWrapper>
             <AddPosts/>
           </AdminWrapper>
          :
           <LoginWrapper>
             <Login/>
           </LoginWrapper>
          }
          </div>
       
         )
        }}
      />

      <Route
        exact={true}
         path="/login"
         render = {props => {
           console.log(props)
          return (
            <div>
           {this.props.auth.token?
            <AdminWrapper>
              <Dashboard/>
            </AdminWrapper>
           :
            <LoginWrapper>
              <Login/>
            </LoginWrapper>
           }
           </div>
        
          )
          }}
        />
        <Route 
          exact={true}
          path="/"
          render={props =>
            <PageWrapper>
            <Home {...props}/>
            </PageWrapper>}
        />

        <Route
          path="/about"
          render={props =>
          <PageWrapper>
            <About {...props}/>
          </PageWrapper>}
        />

        <Route 
            path="/services"
            render={props =>
              <PageWrapper>
              <Services {...props}/>
              </PageWrapper>}

        />

        <Route 
            path="/portfolio"
            render={props =>
              <PageWrapper>
              <Portfolio {...props}/>
              </PageWrapper>}
        />

        <Route 
            path="/team"
            render={props =>
              <PageWrapper>
              <Team {...props}/>
              </PageWrapper>}

        />

        <Route 
            path="/contact"
            render={props =>
              <PageWrapper>
              <Contact {...props}/>
              </PageWrapper>}

        />
      </Router>

      
  );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDistpatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(App);
