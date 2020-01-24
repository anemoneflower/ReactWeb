import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/pages/mainpage/MainPage';
import BoardPage from './components/pages/boardpage/BoardPage';


class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            {/* Justify Routes */}
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/board" component={BoardPage}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
