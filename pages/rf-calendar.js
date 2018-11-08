import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import DateNav from '../src/components/DateNav'
import { Form, Table } from 'react-bootstrap/lib'
import InputTransactionNo from '../src/components/InputTransactionNo'

export default class extends Page {
    render() {
        let sections=[];
        return (
            <Layout title='Calendar' pathname={this.props.pathname} sections={sections}>
                <Form inline>
                    <InputTransactionNo/>
                    <DateNav/>
                    <Table responsive bordered condensed>
                        <tbody>
                            <tr className="danger">
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td>21</td>
                                <td>LOLWRD/16163614</td>
                            </tr>
                            <tr className="success">
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr className="success">
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr className="success">
                                <td><a href="">11:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr className="info">
                                <td><a href="">13:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                            <tr>
                                <td><a href="">00:00</a></td>
                                <td>O</td>
                                <td>P</td>
                                <td></td>
                                <td>HUNTEPI/26941</td>
                            </tr>
                        </tbody>
                    </Table>
                </Form>
            </Layout>
        )
    }

}