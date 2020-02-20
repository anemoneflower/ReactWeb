import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import MainPage from './components/pages/mainpage/MainPage'
import EmailVerificationPage from './components/pages/email_verification/EmailVerificationPage'
// import SignInPage from './components/pages/signin/SignInPage'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SignInPage from './components/pages/sign/SignInPage'
import './App.css';

class App extends Component{
  render(){
    const style = { backgroundColor : 'background-main'}
    
    return (
      <div className = {'background-main'}>
      <Router>
              <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/email" component={EmailVerificationPage}/>
                {/* <Route exact path="/signin" component={SignInPage}/> */}
                {/*<Route exact path="/signup" component={SignUpPage}/> */}
                <Route exact path="/signin" component={SignInPage}/>
                <Redirect path="*" to="/" />
              </Switch>
      </Router>  
      </div>
    );
  }
}

export default App;
