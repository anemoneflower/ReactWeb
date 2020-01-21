import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

class VerificationBox extends React.Component{
    render(){
        return <div align="right">
            <Link to="/signin"><Button type="button" variant="outline-primary"> Sign In </Button></Link>
            <Link to="/email"><Button type="button" variant="outline-primary"> Sign Up </Button></Link></div>;
        
    }    
}

export default VerificationBox