import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import MainPage from './components/pages/mainpage/MainPage'
import EmailVerificationPage from './components/pages/email_verification/EmailVerificationPage'
import SignInPage from './components/pages/signin/SignInPage'


class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
              <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/email" component={EmailVerificationPage}/>
                <Route exact path="/signin" component={SignInPage}/>
                <Redirect path="*" to="/" />
              </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
