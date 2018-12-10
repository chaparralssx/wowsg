import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import {PageHeader} from 'react-bootstrap/lib'
import IframeResponsiveExamples from '../src/components/IframeResponsiveExamples'


export default class extends Page {
    render() {
        return (
            <Layout title="Sign In Form | " pathname={this.props.pathname}>

                <PageHeader>
                    Sign In Form
                </PageHeader>

                <IframeResponsiveExamples url="/signin-example" desktopHeight={250} mobileHeight={300} />

            </Layout>
        )
    }
}