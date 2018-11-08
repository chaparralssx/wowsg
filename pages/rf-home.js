import Layout from '../src/components/RFLayout'
import Page from '../src/components/Page'

export default class extends Page {
    render() {

        let sections=[];

        return (
            <Layout title='Main Menu' pathname={this.props.pathname} sections={sections}>
                <nav className="RFMenu">
                    <form className="form-inline">
                        <div className="btn-group-vertical" role="group">
                            <a className="btn btn-default" href="rf-calendar" role="button">[1] Calendar</a>
                            <a className="btn btn-default" href="rf-receiving" role="button">[2] Receiving</a>
                            <a className="btn btn-default" href="rf-shipping" role="button">[3] Shipping</a>
                            <a className="btn btn-default" href="rf-spotcheck" role="button">[4] Spot Check</a>
                            <a className="btn btn-default" href="#" role="button">[5] Inventory Management</a>
                            <a className="btn btn-default" href="#" role="button">[6] Miscellaneous</a>
                        </div>
                    </form>
                </nav>
            </Layout>
        )
    }

}