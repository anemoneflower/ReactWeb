import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import LogoBox from './LogoBox';
import AboutBox from './AboutBox';
import AboutButton from './AboutButton';

//these imports are just for template
import {Button} from 'react-bootstrap';



class MainPage extends React.Component {
    render(){
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
                            <AboutButton title="About Include">
                                <AboutBox />
                            </AboutButton>
                        </div>
                        {/* about box template end */}
                    </React.Fragment>
                </div>
            </Router>
        );
    }
}

export default MainPage;