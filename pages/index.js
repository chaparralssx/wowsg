import React from 'react'
import Layout from '../src/components/Layout'
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
                {/* <Jumbotron className="jumbotron-yvonne">
                    <p>&ldquo;I love feeling like I’m actually making a difference.&rdquo;</p>
                    <p><a href="https://youtu.be/GSLNJkx6-Ec" target="_blank" className="btn btn-primary">Watch Yvonne’s Story</a></p>
                </Jumbotron> */}
                <PageHeader>
                    WOW Logistics Style Guide
                </PageHeader>

                <p>This is the official WOW Logistics Style Guide.</p>

                <p>It is a living document, and will be updated often.  Select a page from the Style Guide menu drop down above.</p>
            </Layout>
        )
    }
}