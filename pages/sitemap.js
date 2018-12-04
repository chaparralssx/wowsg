import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import { PageHeader, Row, Col } from 'react-bootstrap/lib'

export default class extends Page {
    render() {
        return (
            <Layout title="Site Map | " pathname={this.props.pathname}>
                <PageHeader>
                    Site Map
                </PageHeader>




            </Layout>
        )
    }
}