import React from 'react'
import Layout from '../src/components/Layout'
export default class Error extends React.Component {
    static getInitialProps ({ res, xhr }) {
        const statusCode = res ? res.statusCode : (xhr ? xhr.status : null)
        return { statusCode }
    }

    render () {
        return (
            <Layout>
                <div className="page-header">
                    <h1>Oops</h1>
                </div>
                <h2>{
                this.props.statusCode
                    ? `The server responded with a ${this.props.statusCode} error.`
                    : 'You browser is unable to display this page.'
                }</h2>
                <p>Please visit another page, or try again later.</p>
            </Layout>
        )
    }
}