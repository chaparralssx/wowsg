import { Row } from 'react-bootstrap/lib'
import React from 'react'

class Masthead extends React.Component {
    render() {
        return (               
                <div className="RFMasthead" aria-labelledby="application-title">
                    <a href="/rf-home" className="homeLink btn btn-xs btn-warning"><span className="glyphicon glyphicon-home" aria-hidden="true"></span></a>                
                    <h1 className="title" id="application-title">{this.props.title}</h1>
                    <a href="" className="whLink btn btn-xs btn-info">WRC</a>
                </div>
        )
    }
}

export default Masthead;