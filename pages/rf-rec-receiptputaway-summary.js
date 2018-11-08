import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import { Button, ButtonToolbar, ButtonGroup, Table, Well, Glyphicon } from 'react-bootstrap/lib'

export default class extends Page {

    render() {

        let sections=["Receiving|rf-receiving","Transaction|rf-rec-receipttransaction"];

        return (
            <Layout title='Receipt Putaway Summary' pathname={this.props.pathname} sections={sections} backlink='/rf-rec-receipttransaction'>
                <Well bsSize="small" className="StatusBox">
                    <div className="transactionid">WRDR566018</div>
                    <div className="status">
                        <div className="staged">40 of 40 staged</div>
                        <div className="putaway">40 of 40 putaway</div>
                    </div>
                </Well>

                <ButtonToolbar>
                    <ButtonGroup>
                        <Button block className="btn-next">Receive Next Receipt</Button>
                        <div className="width50">
                            <a href="rf-trailerinspection" className="btn btn-primary btn-block">Trailer Inspection</a>
                        </div>
                        <div className="width50">
                            <a href="rf-charges" className="btn btn-primary btn-block ">Charges</a>
                        </div>
                        <Button block id="commit">Commit &amp; Notify Customer</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <Table condensed bordered>
                    <thead>
                        <tr>
                            <th>LPNs</th>
                            <th>Item</th>
                            <th>Lot</th>
                            <th>Qty</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>27243410034500</td>
                            <td>12345</td>
                            <td>100</td>
                            <td>5511.5</td>
                        </tr>
                        <tr>
                            <th colSpan="3" className="text-right">Total LPNs</th>
                            <td colSpan="2">2</td>
                        </tr>
                        <tr>
                            <th colSpan="3" className="text-right">Total Qty</th>
                            <td colSpan="2">100</td>
                        </tr>
                        <tr>
                            <th colSpan="3" className="text-right">Total Weight</th>
                            <td colSpan="2">5511.5</td>
                        </tr>
                    </tbody>
                </Table>
                <Table condensed bordered>
                    <thead>
                        <tr>
                            <th>LPN</th>
                            <th>Location</th>
                            <th>Qty</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>180705-01035</td>
                            <td>1A09A</td>
                            <td>50</td>
                            <td>2755.75</td>
                        </tr>
                        <tr>
                            <td>180705-01036</td>
                            <td>1A09A</td>
                            <td>50</td>
                            <td>2755.75</td>
                        </tr>
                    </tbody>
                </Table>

            </Layout>
        )
    }

}