import React from 'react'

class LogoBox extends React.Component {
    /**
     * input props:
     *      src - image source
     *      alt - image comment
     * use example:
     * 1. import LogoBox from './components/pages/mainpage/LogoBox';
     * 2. <LogoBox src='./../../../logo_simple.png' alt=""/>
     */
    render() {
        let{src, alt} = this.props;
        return (
            <div style={{textAlign:"center"}}>
                <img
                    src = {src}
                    alt = {alt}
                />
            </div>
        );
    }
}

export default LogoBox;