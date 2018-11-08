import React from 'react';
import PrimaryNav from './RFPrimaryNav'

class RFFooter extends React.Component {
    render() {
        return (
            <footer className="RFFooter">
                <PrimaryNav pathname={this.props.pathname} sections={this.props.sections} backlink={this.props.backlink}/>
            </footer>
        )
    }
}

export default RFFooter;