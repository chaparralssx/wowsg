import React from 'react'
import Layout from '../src/components/CalendarLayout'
import QuickAppointmentForm from '../src/components/QuickAppointmentForm'
import AppointmentSummary from '../src/components/AppointmentSummary'
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
            <Layout title="Home" pathname={this.props.pathname}>
                <h1>WOW Portal</h1>
            </Layout>
        )
    }
}