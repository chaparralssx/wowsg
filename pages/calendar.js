import React from 'react'
import Layout from '../src/components/CalendarLayout'
import { PageHeader } from 'react-bootstrap/lib'
import Page from '../src/components/Page'

export default class extends Page {
    /**
     * This is an example of how the getInitialProps can still do custom things
     * on top of the one it extends from to get the pathname variable.
     * @param req
     * @param pathname
     */
    // static async getInitialProps ({ req, pathname }) {
    //     let superProps = await super.getInitialProps({ req, pathname });
    //     return Object.assign(superProps, {testProp: 'test'});
    // }

    render() {
        return (
            <Layout title="" pathname={this.props.pathname}>

                <row>
                    <div class="col-sm-2">
                        <h2>Calendar Summary</h2>
                    </div>
                </row>

                {/* <PageHeader>
                    WOW Logistics Calendar
                </PageHeader> */}
            </Layout>
        )
    }
}