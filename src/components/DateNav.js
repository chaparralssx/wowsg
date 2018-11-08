import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap/lib'

class DateNav extends React.Component {

    render() {

        return (
            <div className="DateNav">
                <Button bsSize="xsmall"><Glyphicon glyph="backward" /></Button>
                Tue, Jul 03, 2018
                <Button bsSize="xsmall"><Glyphicon glyph="forward" /></Button>
            </div>
        )
    }
}

export default DateNav;