import React, {Component} from 'react';
import Items from '../Common/items'


//images
import img1 from '../Assets/img/about/1.jpg';
import img2 from '../Assets/img/about/2.jpg';
import img3 from '../Assets/img/about/3.jpg';
import img4 from '../Assets/img/about/4.jpg';


//Array with the elements to be render
const items = [
  {status: '', date: '2009-2011', title:'Our Humble Beginnings', description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', img :img1},
  {status:'timeline-inverted',date: 'March 2011',title:'An Agency is Born', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', img :img2},
  {status:'', date: 'December 2012',title:'Transition to Full Service', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', img : img3},
  {status:'timeline-inverted',date: 'July 2014',title:'Phase Two Expansion', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', img : img4},
]

//class that renders the timeline(about) in the main page
class Timeline extends Component {
    render() {
        return (
            <div>
            <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">About</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="timeline">
                    {items.map((item, index) => {
                        return <Items {...item} key={index}/>
                    })}
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <h4>Be Part
                          <br/>Of Our
                          <br/>Story!</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          </div>
        )
    }
}

export default Timeline;