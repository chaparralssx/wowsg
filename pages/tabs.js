import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import { PageHeader } from 'react-bootstrap/lib'
import IframeResponsiveExamples from '../src/components/IframeResponsiveExamples'

export default class extends Page {
    render() {
        return (
            <Layout title="Tabs | " pathname={this.props.pathname}>
                <PageHeader>
                    Tabs <small><a href="https://react-bootstrap.github.io/components.html#tabs" target="_blank">React Documentation</a> <a href="http://getbootstrap.com/javascript/#tabs" target="_blank">Bootstrap Documentation</a></small>
                </PageHeader>

                <IframeResponsiveExamples url="/tabs-example" desktopHeight={350} mobileHeight={450} />

            </Layout>
        )
    }
}