import React from 'react'

export default class extends React.Component {
    static async getInitialProps ({ req, pathname }) {
        return { pathname: req && req.url || pathname }
    }
}