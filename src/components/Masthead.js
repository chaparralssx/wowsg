import {Row} from 'react-bootstrap/lib'
import React from 'react'
import link from '../utils/bootstrapLink'

class Masthead extends React.Component {
    render() {
        return (               
                <div className="Masthead x-application" role="banner" aria-labelledby="application-title">
                    <div className="brand">
                        <a onClick={(e) => link.handleLink(e, '/')} href="/"><img src="/static/images/logo-wow-logistics.png" alt="WOW Logistics Logo" title="Return to the homepage" /></a>
                    </div>
                </div>
        )
    }
}

export default Masthead;