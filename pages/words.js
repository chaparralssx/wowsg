import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import Words from '../src/components/Words'


export default class extends Page {
    render() {
        return (
            <Layout title="Words | " pathname={this.props.pathname}>
                <Words/>
            </Layout>
        )
    }
}