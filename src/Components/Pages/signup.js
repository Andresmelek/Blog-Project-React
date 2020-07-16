import React, { Component } from 'react';
import Field from '../Common/fields';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import * as authActions from '../../store/actions/authActions';


//Array with the elemens to be render
const fields = [
    {name: 'name', elementName: 'input', type: 'text', placeholder:'Your name'},
    {name: 'email', elementName: 'input', type: 'email', placeholder:'Your email'},
    {name: 'password', elementName: 'input', type: 'password', placeholder:'Your password'},
    {name: 'passwordVal', elementName: 'input', type: 'password', placeholder:'Confirm your password'},
    


]

//Class that renders the login page
class SignUp extends Component {
    render(){
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Login</h1>
                        </div>
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.props.login(this.props.values.email, this.props.values.password)
                        }}>
                        <div className="row">
                            {fields.map((field, index) => { 
                                return (
                                    <div className="col-md-6">
                                    <Field {...field} key={index}
                                    value={this.props.values[field.name]}
                                    name={field.name}
                                    onChange={this.props.handleChange}
                                    onBlur={this.props.onBlur}
                                    touched={this.props.touched[field.name]}
                                    errors={this.props.errors[field.name]}
                                />
                                </div>)
                                })
                            }
                            <div className="col-md-12">
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps  = state => {
    return ({
        auth: state.auth
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        login: (email, pass) => {
            console.log("Loging user", email);
            dispatch(authActions.login(email, pass));
        }
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        name: "",
        email: "",
        password:"",
        passwordVal: ""
    }), 
    validationSchema: Yup.object().shape({
        name: Yup.string().name.required('Please enter a valid name'),
        email: Yup.string().email('Email is invalid').required('You need to login with your email adress'),
        password: Yup.string().main(8, 'Password need to be at least 8 characters long').required('You need to enter your password.'),
        passwordVal: Yup.string().required('You need to enter your password again.').test('pass-match', 'Passwords dont match', function(value){
            const {password} = this.props.parent;

            return password === value;
        }),

    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log('Loging attempt', values);
        //login(values.email, values.password);
    }
})(SignUp));