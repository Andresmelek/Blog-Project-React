import React, {Component, useImperativeHandle} from 'react';
import Field from '../Common/fields';
import {withFormik} from 'formik';
import * as Yup from 'yup';


//Array with the elements to be rendered
const fields = [
    {classname: '', name: 'name', elementName: 'input', type: 'text', placeholder:'Your Name'},
    {classname: '', name: 'email', elementName: 'input', type: 'email', placeholder:'Your email'},
    {classname: '', name: 'phone', elementName: 'input', type: 'text', placeholder:'Your phone number'},
]
const text = [{classname: 'col-md-6', name: 'message', elementName: 'textarea', type: 'text', placeholder:'Type your message'}]

//Class that renders the contact page
class Contact extends Component {
  

    render(){
        return (
            <section id="contact">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <form onSubmit={this.props.handleSubmit} id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="row">
                            <div class="col-md-6">
                            {fields.map((field, index) => {
                                    return <Field {...field} key={index} 
                                    value={this.props.values[field.name]}
                                    name={field.name}
                                    onChange={this.props.handleChange}
                                    onBlur={this.props.handleBlur}
                                    touched={this.props.touched[field.name]}
                                    errors={this.props.errors[field.name]}
                                    />
                                })}
                            </div>
                            <Field {...text[0]} 
                            value={this.props.values[text[0].name]}
                            name={text[0].name}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                            touched={this.props.touched[text[0].name]}
                            errors={this.props.errors[text[0].name]}
                             />
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button id="sendMessageButton"
                                    className="btn btn-primary btn-xl text-uppercase"
                                    type="submit"
                                    >Send Message</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>            
        )
    }
}


export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message:'',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'This must be longer').required('You must type your name'),
        email: Yup.string().email('Please enter a valid Email').required('You must your email'),
        phone: Yup.string().min(10, 'This must be longer, 10 digit number')
        .max(15, 'You are over 15 characters long').required('You must type your phone'),
        message: Yup.string().max(500, 'You are over the characters allowed').required('You must type a message')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        alert("You have sucesfully submited the form");
    }
})(Contact); 