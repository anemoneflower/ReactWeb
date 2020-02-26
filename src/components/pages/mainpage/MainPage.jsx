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


                    {/* about box template */}
                    <div align="center">
                        <Button className="m-1">About</Button>
                    </div>
                    {/* about box template end */}
                    
                    <div align="right">
                        <h1>CertificateButton?</h1>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

export default MainPage;