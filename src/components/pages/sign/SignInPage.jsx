import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Signin from './SignIn';
import "./style.css";



class SignPage extends React.Component {
    render(){
        return (
            <background classname="background">
                <Signin/>
            </background>  
        );
    }
}

export default SignPage;