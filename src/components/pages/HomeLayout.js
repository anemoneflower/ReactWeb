import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeLayout() {
    return (
        <React.Fragment>
            <h1>INCLUDE KAIST</h1>
            <Link style={linkStyle} to="/about">About</Link>
        </React.Fragment>
    )
}


const linkStyle = {
    color: '#141414',
    textDecoration: 'none'
}