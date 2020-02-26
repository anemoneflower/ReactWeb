import React,{useState} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SignInForm from "./SignInForm.js";
const axios = require("axios");
const FormValidators = require("./validate");
const validateSigninForm = FormValidators.validateSigninForm;
const zxcvbn = require("zxcvbn");

class Signin extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            errors: {},
            user: {
                email:"",
                password: "",
            },
            type: "password"
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitSignIn = this.submitSignIn.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleChange(event){
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }
    
    submitSignIn(user){
        const params = new URLSearchParams();
        params.append('email', user.email);
        params.append('password', user.pw);
        // var params = {username: user.usr, studentId: user.id, password:user.pw, email:user.email};
        axios
            .post("/api/signup",params)
            .then(res => {
                if (res.data.success === true) {
                  localStorage.token = res.data.token;
                  localStorage.isAuthenticated = true;
                  window.location.reload();
                } else {
                  this.setState({
                    errors: { message: res.data.message }
                  });
                }
            })
            .catch(err => {
                console.log("Sign up data submit error: ", err);
              });
    }

    validateForm(event) {
        event.preventDefault();
        var payload = validateSigninForm(this.state.user);
        if (payload.success) {
          this.setState({
            errors: {}
          });
          var user = {
            pw: this.state.user.password,
            email: this.state.user.email
          };
          this.submitSignIn(user);
        } else {
          const errors = payload.errors;
          this.setState({
            errors
          });
        }
      }
    
    render(){
        return (
            <SignInForm
              onSubmit={this.validateForm}
              onChange={this.handleChange}
              errors={this.state.errors}
              user={this.state.user}
              type={this.state.type}
            />
        );   
    }    
}

export default Signin