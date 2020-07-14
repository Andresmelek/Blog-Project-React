import React, { Component } from 'react';


//Class that renders the fields to fill in the contact page
class Field extends Component {
  
    render(){
        return (
            <div className={this.props.classname}>
                <div className="form-group">
                 {this.props.elementName === 'textarea'?
                    <textarea className="form-control" 
                        id={this.props.name} type={this.props.type} 
                        placeholder={this.props.placeholder} 
                        required="required" 
                        data-validation-required-message={`Please enter your ${this.props.name}.`}
                        name={this.props.name}  
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                    :
                    <input className="form-control" 
                        id={this.props.name} type={this.props.type} 
                        placeholder={this.props.placeholder} 
                        required="required" 
                        data-validation-required-message={`Please enter your ${this.props.name}.`}
                        name={this.props.name} 
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />}
                    <p className="help-block text-danger"></p>
                        {(this.props.touched && this.props.errors) &&
                            <span className="help-block text-danger">{this.props.errors}</span>
                        }
                    
                </div>
            </div>
        )
    }
}

export default Field;