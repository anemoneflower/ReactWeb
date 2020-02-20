import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import AuthContent from './AuthContent';
import InputWithLabel from './InputWithLabel';

class Signin extends React.Component{
    render(){
        return (
            <AuthContent>
                <InputWithLabel label="Email" name="email" placeholder="Email"/>
                <InputWithLabel label="password" name="password" placeholder="password" type="password"/>
            </AuthContent>
        );
        
    }    
}

export default Signin