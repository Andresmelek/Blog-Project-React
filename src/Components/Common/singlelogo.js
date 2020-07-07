import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SingleLogo extends Component {
    render(){
        return(
            <div class="col-md-3 col-sm-6">
                    <Link href="#">
                    <img class="img-fluid d-block mx-auto" src={this.props.img} alt=""/>
                    </Link>
            </div>
        )
    }
}

export default SingleLogo;