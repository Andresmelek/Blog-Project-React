import React, { Component } from 'react';
import Field from '../Common/fields';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = [
    {name: 'name', elementName: 'input', type: 'text', placeholder:'Your Name'},
    {name: 'email', elementName: 'input', type: 'email', placeholder:'Your email'},

]


class Login extends Component {
    render(){
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Login</h1>
                        </div>
                        <div className="row">
                            {fields.map((field, index) => { 
                                return (
                                    <div className="col-md-12">
                                    <Field {...field} key={index}
                                    value={this.props.values[field.name]}
                                    name={field.name}
                                    onChange={this.props.hangleChange}
                                    onBlur={this.props.onBlur}
                                    touched={this.props.touched[field.name]}
                                    errors={this.props.errors[field.name]}
                                />
                                </div>)
                            }
                            )}
                            <div className="col-md-12">
                            <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        email: "",
        password:""
    }), 
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('You need to login with your email adress'),
        password: Yup.string().required('You need to enter your password.')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log('Loging attempt', values);
    }
})(Login);