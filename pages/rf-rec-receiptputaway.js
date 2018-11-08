import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import { Alert, FormControl, ControlLabel, Checkbox, Button, ButtonToolbar, Table, Well, Popover, Tooltip, Modal, OverlayTrigger } from 'react-bootstrap/lib'

export default class extends Page {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        let sections=["Receiving|rf-receiving","Transaction|rf-rec-receipttransaction"];
        
        return (
            <Layout title='Receipt Putaway' pathname={this.props.pathname} sections={sections} backlink='/rf-rec-receipttransaction'>
                <Well bsSize="small" className="StatusBox">
                    <div className="transactionid">WRDR566018</div>
                    <div className="status">
                        <div className="staged">0 of 40 staged</div>
                        <div className="putaway">0 of 40 putaway</div>
                    </div>
                    <div className="location">Current Location: RCV04</div>
                </Well>

                <Alert bsStyle="danger">
                    <Button className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    Enter <strong>LPN</strong> and <strong>To Location</strong>
                </Alert>

                <Table condensed>
                    <tbody>
                        <tr>
                            <td><ControlLabel>LPN</ControlLabel></td>
                            <td><FormControl type="lpn" placeholder="" /></td>
                        </tr>
                        <tr>
                            <td><ControlLabel>Quantity</ControlLabel></td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><ControlLabel>Suggested Loc</ControlLabel></td>
                            <td>50STORAGE</td>
                        </tr>
                        <tr>
                            <td><ControlLabel>Temperature</ControlLabel></td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><ControlLabel>Hold Bulk Loc</ControlLabel></td>
                            <td><Checkbox></Checkbox></td>
                        </tr>
                        <tr>
                            <td><ControlLabel>To Location</ControlLabel></td>
                            <td><FormControl type="loc" placeholder="" /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <ButtonToolbar>
                                    <Button bsStyle="primary">Place LPN</Button>
                                    <Button bsStyle="danger pull-right">Cancel</Button>
                                </ButtonToolbar>
                                <ButtonToolbar>
                                    <Button>Nest</Button>
                                    <Button>LPN Status</Button>
                                    <Button className="pull-right">Commit</Button>
                                </ButtonToolbar>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {/* <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={4}>
                            LPN
                        </Col>
                        <Col sm={8}>
                            <FormControl type="lpn" placeholder="" />
                        </Col>
                    </FormGroup> 
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={4}>
                            Quantity
                        </Col>
                        <Col sm={8}>
                            <FormControl.Static>50</FormControl.Static>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={4}>
                            Suggested Loc
                        </Col>
                        <Col sm={8}>
                            <FormControl.Static>50STORAGE</FormControl.Static>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={4}>
                            Temperature
                        </Col>
                        <Col sm={8}>
                            <FormControl.Static>50</FormControl.Static>
                        </Col>
                    </FormGroup>                 
                    <FormGroup>
                        <Col smOffset={4} sm={8}>
                            <Checkbox>Hold bulk location</Checkbox>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={4}>
                            To Loc
                        </Col>
                        <Col sm={8}>
                            <FormControl type="loc" placeholder="" />
                        </Col>
                    </FormGroup>
                    <ButtonToolbar>
                        <Button bsStyle="primary">Place LPN</Button>
                        <Button bsStyle="danger">Cancel</Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <Button>Nest</Button>
                        <Button>LPN Status</Button>
                        <Button>Commit</Button>
                    </ButtonToolbar>
                </Form> */}
                <ButtonToolbar>
                    <a className="btn btn-sm btn-default" onClick={this.handleShow}>Temp Change Modal</a>
                    <a className="btn btn-sm btn-info" href="rf-rec-receiptputaway-summary">Continue Demo -></a>
                </ButtonToolbar>
                

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Do you want to change the temp from <strong>Ambient</strong> to&nbsp;<strong>50</strong>?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <a className="btn btn-sm btn-info" href="rf-rec-receiptputaway-summary">Yes</a>
                        <Button bsStyle="danger" onClick={this.handleClose}>Cancel</Button>
                    </Modal.Footer>
                </Modal>

            </Layout>
        )
    }

}