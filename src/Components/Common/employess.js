import React, {Component} from 'react';
import {Link} from 'react-router-dom';


//Class that renders the employess in the  team page
class Employe extends Component {
    render(){
        return (
        <div class="col-sm-4">
        <div class="team-member">
            <img class="mx-auto rounded-circle" src={this.props.picture} alt=""/>
            <h4>{this.props.name}</h4>
            <p class="text-muted">{this.props.role}</p>
            <ul class="list-inline social-buttons">
            <li class="list-inline-item">
                <Link href="#">
                <i class="fab fa-twitter"></i>
                </Link>
            </li>
            <li class="list-inline-item">
                <Link href="#">
                <i class="fab fa-facebook-f"></i>
                </Link>
            </li>
            <li class="list-inline-item">
                <Link href="#">
                <i class="fab fa-linkedin-in"></i>
                </Link>
            </li>
            </ul>
        </div>
        </div>)
    }
}


export default Employe;