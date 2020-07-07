import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../Assets/img/header-bg.jpg';

// Reausable pages
import Services from '../Pages/services';
import Portfolio from '../Pages/portfolio';
import Timeline from './timeline';
import Team from '../Pages/team';
import Logo from '../Pages/logos';
import Contact from './contacts';

class Home extends Component {
    render(){

        return (
        <div>
          <Header
              title="Welcome To Our Studio!"
              subtitle="It's nice to meet tou!"
              buttonText="Tell me more"
              link="services"
              showButton={true}
              img= {image}
          />

          <Services/>
          <Portfolio/>
          <Timeline/>
          <Team/>
          <Logo/>
          <Contact/>
        </div>
        )
    }
}

export default Home;