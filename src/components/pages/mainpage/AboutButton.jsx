// Click AboutButton to open and close AboutBox.

import React from 'react';
import '../../../styles/hoveringButton.css';
// hoveringButton style importing.
import '../../../styles/aboutBox.css';

class AboutButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            // status checking whether AboutBox is opened or not.
        }
        this.openClose = this.openClose.bind(this);
        // openClose is method of AboutButton
    }

    openClose() {
        // open AboutBox if closed, close if opened
        const {opened} = this.state;
        this.setState({
            opened: !opened,
        });
    }

    render() {
        var{ buttonText, content } = this.props;
        // buttonText is text in button "About Include"
        // content is AboutBox
        const{ opened } = this.state;

        if (opened){
            buttonText = 'Click to Close';
        }
        else{
            buttonText = 'About Include';
        }
        
        return (
			<div className="box hoveringButton">
                {/* see hoveringButton.css */}
				<div className="" onClick={this.openClose}>
					{buttonText}
				</div>
				{opened && (					
					<div class="boxContent aboutBox">
						{content}
					</div>
				)}
			</div>
        );
    }
}

export default AboutButton;