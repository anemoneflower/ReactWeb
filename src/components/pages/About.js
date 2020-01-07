import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

export default function About() {
    return (
        <Router>
            <div>
                <React.Fragment>
                    <h1>About</h1>
                    <p>Hi we are include!</p>
                </React.Fragment>
            </div>
        </Router>
    )
}
