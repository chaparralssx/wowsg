import Head from 'next/head'
import Masthead from './RFMasthead'
import Footer from './RFFooter'
import TrackDuck from './TrackDuck'
import {Grid, Row, Col} from 'react-bootstrap/lib'
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();    
    document.html.classList.add('RFLayout');
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
    window.scrollTo(0, 0);
};
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title = '', pathname, sections, backlink }) => (
    <div>
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

        <Masthead title={title}/>
        
        <Grid className="maincontent">

            <Row className="show-grid">
                <Col>
                    { children }
                </Col>
            </Row>

        </Grid>

        <Footer pathname={pathname} sections={sections} backlink={backlink}/>

        {/* <TrackDuck/> */}

    </div>
)