import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import RFCharges from '../src/components/RFCharges'
import { Table, Well, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button, Glyphicon, Alert } from 'react-bootstrap/lib'

export default class extends Page {

    render() {

        let sections=["Receiving|rf-receiving","Transaction|rf-rec-receipttransaction","Summary|rf-rec-receiptputaway-summary"];

        return (
            <Layout title='Charges' pathname={this.props.pathname} sections={sections} backlink='rf-rec-receiptputaway-summary'>
                <Well bsSize="small" className="StatusBox">
                    <div className="transactionid">WRDR566018</div>
                    <div className="custid">LOLWRD</div>
                </Well>

                <Alert bsStyle="danger">
                    <Button className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    Complete all required fields
                </Alert>

                <Table condensed bordered striped className="formTable">
                    <thead>
                        <tr>
                            <th>Charge</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Barrel LPN</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Floor Loading</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>1/2 Manual Labor</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Pallets Heat Treated</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Overhang Machine Labor</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Overhang Manual Labor</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Rehandling - Damage Bags</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Pulled Samples for Grader</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Shrouded Pallets</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Temperature Transfer</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Clerical Labor</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Machine Labor</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Machine Labor Overtime</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Manual Labor</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Manual Labor Overtime</th>
                            <td>
                                <RFCharges/>
                            </td>
                        </tr>
                        <tr>
                            <th>Pallet Charge</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Trim Sheets</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Stretchwrap / Pallet</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Double Stretchwrap / Pallet</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <a className="btn btn-default btn-back" href="rf-palletinspection"><Glyphicon glyph="arrow-left" /> Pallet Insp</a>
                    <Button bsStyle="default btn-save">Save</Button>
                    <a className="btn btn-primary pull-right btn-next" href="rf-home">Done <Glyphicon glyph="home" /></a>
                </ButtonToolbar>

            </Layout>
        )
    }

}