import Head from 'next/head'
import React from 'react'
import { Grid } from 'react-bootstrap/lib'

export default ({ children, title = '' }) => (
    <div>
        <Head>
            <title>{ title }Web Style Guide - Network Health</title>
            <link rel="icon" type="image/icon" href="/static/images/favicon.ico" />
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link href="/static/compiled/css/theme.css" rel="stylesheet" type="text/css" />
            <link href="/static/compiled/css/styleguide.css" rel="stylesheet" type="text/css" />
            <link href="/static/compiled/css/sgexample.css" rel="stylesheet" type="text/css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>
        </Head>        
        
        <Grid className="blankpage">
            { children }
        </Grid>

    </div>
)