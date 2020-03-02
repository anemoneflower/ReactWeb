import React from 'react'
//import { BrowserRouter as Router} from 'react-router-dom';
//import { Link } from 'react-router-dom'


import BoardTableBox from './BoardTableBox';
import BoardTitleBox from './BoardTitleBox';
// import SideNavBar from './SideNavBar';

//axios is for loading sample database
import axios from 'axios';


class BoardPage extends React.Component {
    state = {
        posts: []
    }

    //load sample database
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => this.setState({posts: res.data}))
    }

    render(){
        console.log(this.state.posts);
        return (
                <div>
                    <React.Fragment>
                        <BoardTitleBox title="Notice"/>
                        <BoardTableBox data={this.state.posts}/>
                    </React.Fragment>
                </div>
        );
    }
}

export default BoardPage;