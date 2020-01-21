import React from 'react';
import { Link } from 'react-router-dom'

class VerificationBox extends React.Component{
    render(){
        return <Link to="/email-verification">
            <button type="button" class="btn btn primary"> Sign Up </button></Link>;
    }    
}

export default VerificationBox