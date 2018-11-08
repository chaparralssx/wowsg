import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'

export default class extends Page {
    render() {
        let sections=["Home|rf-home"];
        return (
            <Layout title='Receiving' pathname={this.props.pathname} sections={sections} backlink='/rf-home'>
                <nav className="RFMenu">
                    <form className="form-inline">
                        <div className="btn-group-vertical" role="group">
                            <a className="btn btn-default" href="rf-rec-custlpn-stgnst" role="button">[1] Cust LPNs-Stage/Nest</a>
                            <a className="btn btn-default" href="#" role="button">[2] Cust LPNs-Putaway</a>
                            <a className="btn btn-default" href="#" role="button">[3] WOW LPNs</a>
                            <a className="btn btn-default" href="rf-rec-receipttransaction" role="button">[4] Receipt Putaway</a>
                        </div>
                    </form>
                </nav>
            </Layout>
        )
    }

}