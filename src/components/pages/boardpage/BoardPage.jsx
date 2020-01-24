import React from 'react'
//import { BrowserRouter as Router} from 'react-router-dom';
//import { Link } from 'react-router-dom'


import BoardTableBox from './BoardTableBox';
import BoardTitleBox from './BoardTitleBox';
import SideNavBar from './SideNavBar';


class BoardPage extends React.Component {
    render(){
        return (

                <div>
                    <React.Fragment>
                        <BoardTitleBox title="Notice"/>
                        <BoardTableBox/>
                        <SideNavBar/>
                    </React.Fragment>
                </div>
        );
    }
}

export default BoardPage;