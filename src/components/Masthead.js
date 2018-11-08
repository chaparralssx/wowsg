import {Row} from 'react-bootstrap/lib'
import React from 'react'
import link from '../utils/bootstrapLink'
import PrimaryNav from './PrimaryNav'

class Masthead extends React.Component {
    render() {
        return (               
                <div className="Masthead x-application" role="banner" aria-labelledby="application-title">
                    <div className="brand">
                        <a onClick={(e) => link.handleLink(e, '/')} href="/"><img src="/static/images/logo-wow-logistics.png" alt="WOW Logistics Logo" title="Return to the homepage" /></a>
                    </div>
                    {/* <div className="information">
                        Questions? Call <strong>888-888-8888</strong> to reach a sales representative
                    </div>
                    <div className="information">
                        <div className="title" id="application-title">Application Title or Marketing Message</div>
                        <div className="small">Optional description or teaser text</div>
                    </div> */}
                    <PrimaryNav/>
                </div>
        )
    }
}

export default Masthead;