import React from 'react'

function LogoBox(props) {
    /**
     * input props:
     *      src - image source
     *      alt - image comment
     * use example:
     * 1. import LogoBox from './components/pages/mainpage/LogoBox';
     * 2. <LogoBox src='./../../../logo_simple.png' alt=""/>
     */
    let{src, alt} = props
    return (
        <img
            src = {src}
            alt = {alt}
        />
    );
}

export default LogoBox;