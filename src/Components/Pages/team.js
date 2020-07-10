import React, {Component} from 'react';
import Employe from '../Common/employess';

//images 
import img1 from '../Assets/img/team/1.jpg';
import img2 from '../Assets/img/team/2.jpg';
import img3 from '../Assets/img/team/3.jpg';

const employes = [
    {name: 'Kay Garland', role: 'Lead Designing', picture: img1},
    {name: 'Larry Parker', role: 'Lead Marketer', picture: img2},
    {name: 'Diana Pertender', role: 'Lead Developer', picture: img3},
]

class Team extends Component {
    render() {
        return (
            <div>
                <section class="bg-light" id="team">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div class="row">
                       {employes.map((employe, index) => {
                           return <Employe {...employe} key={index}/>
                       })}
                       
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Team;