import Layout from '../src/components/Layout'
import {PageHeader} from 'react-bootstrap/lib'
import Page from '../src/components/Page'

export default class extends Page {
    render() {
        return (
            <Layout title='About Us | ' pathname={this.props.pathname}>
                <PageHeader>
                    About Us
                </PageHeader>
            </Layout>
        )
    }

}