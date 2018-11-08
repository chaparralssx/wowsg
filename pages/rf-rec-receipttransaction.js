import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import InputTransactionNo from '../src/components/InputTransactionNo'

export default class extends Page {
    render() {
        let sections=["Receiving|rf-receiving"];
        return (
            <Layout title='Receipt Transaction' pathname={this.props.pathname} sections={sections} backlink='/rf-receiving'>
                <InputTransactionNo/>
                <a className="btn btn-sm btn-info" href="rf-rec-receiptputaway">Continue Demo -></a>
            </Layout>
        )
    }

}