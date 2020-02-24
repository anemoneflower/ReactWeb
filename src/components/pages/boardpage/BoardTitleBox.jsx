import React from 'react'

class BoardTitleBox extends React.Component {
    render() {
        let{title} = this.props;
        return (
            <div style={{textAlign:"center"}}>
                <h1>{title}</h1>
            </div>
        );
    }
}

export default BoardTitleBox;