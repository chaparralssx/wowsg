import React from 'react'
import Layout from '../src/components/Layout'
import Page from '../src/components/Page'
import Typography from '../src/components/Typography'


export default class extends Page {
    render() {
        return (
            <Layout title="Typography | " pathname={this.props.pathname}>
                <Typography/>
            </Layout>
        )
    }
}