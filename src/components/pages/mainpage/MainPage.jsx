import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { Link } from 'react-router-dom'

//these imports are just for template


import {Button} from 'react-bootstrap';

class MainPage extends React.Component {
    render(){
        return (

            <div>
                <React.Fragment>

                    <div align="right">
                        <h1>verification box?</h1>
                    </div>

                    {/* about box template */}
                    <div align="center">
                        <Button className="m-1">About</Button>
                    </div>
                    {/* about box template end */}
                </React.Fragment>
            </div>
    );
    }
}

export default MainPage;