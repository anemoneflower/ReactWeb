import React from 'react'
//import { BrowserRouter as Router} from 'react-router-dom';
//import { Link } from 'react-router-dom'

import LogoBox from './LogoBox';
import AboutBox from './AboutBox';
import AboutButton from './AboutButton';
import VerificationBox from './VerificationBox';


class MainPage extends React.Component {
    render(){
        return (

                <div>
                    <React.Fragment>

                        <div align="right">
                            <VerificationBox/>
                        </div>
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
        );
    }
}

export default MainPage;