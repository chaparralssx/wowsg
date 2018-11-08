import React from 'react'
import Page from '../src/components/Page'
import { PageHeader } from 'react-bootstrap/lib'
import ColorPallete from '../src/components/ColorPallete'
import Layout from '../src/components/Layout'


export default class extends Page {
    render() {
        return (
            <Layout title="Color Pallete | " pathname={this.props.pathname}>
                <PageHeader>Color Pallete</PageHeader>
                <ColorPallete/>
            </Layout>
        )
    }
}