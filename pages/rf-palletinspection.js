import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import { Table, Well, FormControl, ButtonToolbar, Button, Glyphicon, Alert } from 'react-bootstrap/lib'

export default class extends Page {

    render() {

        let sections=["Receiving|rf-receiving","Transaction|rf-rec-receipttransaction","Summary|rf-rec-receiptputaway-summary"];

        return (
            <Layout title='Pallet Inspection' pathname={this.props.pathname} sections={sections} backlink='rf-rec-receiptputaway-summary'>
                <Well bsSize="small" className="StatusBox">
                    <div className="transactionid">WRDR566018</div>
                </Well>

                <Alert bsStyle="success">
                    <Button className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></Button>
                    Pallet Inspection saved
                </Alert>

                <Table condensed bordered className="formTable">
                    <tbody>
                        <tr>
                            <th>Regular</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Chep</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Junk</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Heat</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>Euro</th>
                            <td>
                                <FormControl type="text" />
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <a className="btn btn-default btn-back" href="rf-trailerinspection"><Glyphicon glyph="arrow-left" /> Trailer Insp</a>
                    <Button bsStyle="default btn-save">Save</Button>
                    <a className="btn btn-primary btn-next pull-right" href="rf-charges">Charges <Glyphicon glyph="arrow-right" /></a>
                </ButtonToolbar>

            </Layout>
        )
    }

}