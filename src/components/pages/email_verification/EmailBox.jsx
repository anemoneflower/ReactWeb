import React from 'react';

class EmailBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {email:'email@kaist.ac.kr'}
        this.handleChange = this.handleChange.bind(this);
        this.hadleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return <input placeholder="Email"></input>

    }

}

export default EmailBox