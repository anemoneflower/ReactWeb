import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import LogoBox from './LogoBox';

//these imports are just for template
import {Button} from 'react-bootstrap';



function MainPage() {
    return (
        <Router>
            <div>
                <React.Fragment>
                    {/* verification box template*/}
                    <div align="right">
                        <Button className="m-1" variant="outline-primary">Sign In</Button>
                        <Button className="m-1" variant="outline-primary">Sign Up</Button>
                    </div>
                    {/* verification box template end */}

                    <LogoBox src='./../../../logo_simple.png' alt=""/>

                    {/* about box template */}
                    <div align="center">
                        <Button className="m-1">About</Button>
                    </div>
                    {/* about box template end */}
                </React.Fragment>
            </div>
        </Router>
    )
}

export default MainPage;