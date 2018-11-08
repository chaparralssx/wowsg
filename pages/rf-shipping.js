import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'
import { Well } from 'react-bootstrap/lib'
import InputTransactionNo from '../src/components/InputTransactionNo'

export default class extends Page {
    render() {
        let sections=["Shipping|"];
        return (
            <Layout title='Shipping' pathname={this.props.pathname} sections={sections}>
                <InputTransactionNo/>
                <Well bsSize="small">
                    <p className="small text-center">Press <code>CRTL+m</code> to toggle menu</p>
                    <nav className="RFMenu">
                        <form className="form-inline">
                            <div className="btn-group-vertical" role="group">
                                <a className="btn btn-default" href="#" role="button">[1] Shipping</a>
                                <a className="btn btn-default" href="#" role="button">[2] Shipping (Select&nbsp;LPNs)</a>
                                <a className="btn btn-default" href="#" role="button">[3] Ownership Transfer (Select&nbsp;LPNs)</a>
                            </div>
                        </form>
                    </nav>
                </Well>
            </Layout>
        )
    }

}