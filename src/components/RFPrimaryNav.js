import React from 'react';
import { Nav } from 'react-bootstrap/lib'


function Breadcrumbs(props){
    var html ='';
    if(props.backlink != null){
        html += '<a class="btn btn-xs btn-warning" href="'+ props.backlink +'"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span></a>';
    }
    if(props.sections.length > 0){
        html += '<div class="breadcrumbs">';
        props.sections.map(function(section){
            var elements = section.split('|', 2);
            html += '<a href="/' + elements[1] + '" class="xbtn xbtn-xs xbtn-default">' + elements[0] + '</a>';
        });
        html += '</div>' ;
    }
    return (<Nav className="RFPrimaryNav xbtn-group" role="group" dangerouslySetInnerHTML={{__html: html}}></Nav>);
}


class RFPrimaryNav extends React.Component {

    render() {
        return (
            <Breadcrumbs backlink={this.props.backlink} sections={this.props.sections} />
        )
    }
}

export default RFPrimaryNav;