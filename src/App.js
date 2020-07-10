import React, { Component } from 'react';
import PageWrapper from './Components/pageWrapper';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './Components/Pages/home';
import About from './Components/Pages/about';
import Services from './Components/Pages/services';
import Portfolio from './Components/Pages/portfolio';
import Team from './Components/Pages/team';
import Contact from './Components/Pages/contacts';
import AdminWrapper from './Components/AdminWrapper';
import Login from './Components/Pages/login';

class App extends Component {
  render(){
  return (
    <Router>

      <Route
         path="/login"
         render = {props => 
         <AdminWrapper>
            <Login/>
         </AdminWrapper>
          }
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

export default App;
