import Head from 'next/head'
import TrackDuck from './TrackDuck'
import {Grid, Row} from 'react-bootstrap/lib'
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
    window.scrollTo(0, 0);
};
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title = '', pathname, className }) => (
    <div className={ className }>
        <Head>
            <title>{ title } | WOW Logistics</title>
            <link rel="icon" type="image/icon" href="/static/images/favicon.ico" />
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link href="/static/compiled/css/theme.css" rel="stylesheet" type="text/css" />
            <link href="/static/compiled/css/nprogress.css" rel="stylesheet" type="text/css" />
            <link href="/static/compiled/css/styleguide.css" rel="stylesheet" type="text/css" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>
        </Head>
        
        
        <GlobalNavbar/>

        <Grid>

            <Row className="maincontent" role="main">
                { children }
            </Row>

        </Grid>

        <TrackDuck/>

    </div>
)