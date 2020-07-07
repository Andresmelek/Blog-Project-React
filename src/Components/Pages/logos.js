import React, {Component} from 'react';
import SingleLogo from '../Common/singlelogo';

//images
import img1 from '../Assets/img/logos/1.jpg'; 
import img2 from '../Assets/img/logos/2.jpg'; 
import img3 from '../Assets/img/logos/3.jpg'; 
import img4 from '../Assets/img/logos/4.jpg'; 

const logos = [
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4}
]

class Logo extends Component {
    render(){
        return (
            <div>
                 <section class="py-5">
                    <div class="container">
                    <div class="row">
                        {logos.map((logo, index) => {
                            return <SingleLogo {...logo} key={index}/>
                        })}

                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Logo;