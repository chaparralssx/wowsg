import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import { PageHeader, Alert } from 'react-bootstrap/lib'
// import IframeResponsiveExamples from '../src/components/IframeResponsiveExamples'

export default class extends Page {
    render() {
        return (
            <Layout title="Alerts | " pathname={this.props.pathname}>
                <PageHeader>
                    Alerts
                </PageHeader>


                <section>
                    <Alert bsStyle="success" onDismiss={function () { }}>
                        <strong>Success!</strong> This is a "success" alert.
                    </Alert>
                    <Alert bsStyle="info" onDismiss={function () { }}>
                        <strong>Information</strong> This is a "info" alert.
                    </Alert>
                    <Alert bsStyle="warning" onDismiss={function () { }}>
                        <strong>Warning</strong> This is a "warning" alert.
                    </Alert>
                    <Alert bsStyle="danger" onDismiss={function () { }}>
                        <strong>Danger!</strong> This is a "danger" alert.
                    </Alert>

                </section>


            </Layout>
        )
    }
}