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

class App extends Component {
  render(){
  return (
    <Router>
      <PageWrapper>
        <Route 
          exact={true}
          path="/"
          component={Home}
        />

        <Route
          path="/about"
          component={About}
        />

        <Route 
            path="/services"
            component={Services}

        />

        <Route 
            path="/portfolio"
            component={Portfolio}
        />

        <Route 
            path="/team"
            component={Team}

        />

        <Route 
            path="/contact"
            component={Contact}

        />
      </PageWrapper>
      </Router>

      
  );
  }
}

export default App;
