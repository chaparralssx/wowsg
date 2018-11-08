import {Panel, Button, Media} from 'react-bootstrap/lib'
import React from 'react';

class FindButtonsPanel extends React.Component {
    render() {
        return (
            <Panel className="FindButtonsPanel">
                <Button bsStyle="info" bsSize="large">
                    <Media>
                        <Media.Left>
                            <img src="/static/images/icon-find-doc.png" alt="Doctor icon"/>
                        </Media.Left>
                        <Media.Body>
                            Find a Doctor
                        </Media.Body>
                    </Media>
                </Button>
                <Button bsStyle="primary" bsSize="large">
                    <Media>
                        <Media.Left>
                            <img src="/static/images/icon-findafacility.png" alt="Facility icon"/>
                        </Media.Left>
                        <Media.Body>
                            Find a Facility
                        </Media.Body>
                    </Media>
                </Button>
                <Button bsStyle="success" bsSize="large">
                    <Media>
                        <Media.Left>
                            <img src="/static/images/icon-find-pharmacy.png" alt="Pharmacy icon"/>
                        </Media.Left>
                        <Media.Body>
                            Find a Pharmacy
                        </Media.Body>
                    </Media>
                </Button>
            </Panel>
        )
    }
}

export default FindButtonsPanel;