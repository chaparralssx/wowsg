import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import InputTransactionNo from '../src/components/InputTransactionNo'

export default class extends Page {
    render() {
        let sections=["Receiving|rf-receiving"];
        return (
            <Layout title='Cust LPNs (Stage/Nest)' pathname={this.props.pathname} sections={sections} backlink='/rf-receiving'>
                <InputTransactionNo/>
            </Layout>
        )
    }

}